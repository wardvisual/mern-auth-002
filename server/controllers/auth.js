const shortid = require("shortid");
const crypto = require("crypto");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const sendToken = require("../utils/sendToken");
const sendEmail = require("../utils/sendEmail");

exports.register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });

    if (userExists)
      return res.status(401).json({ message: "Invalid Credentials" });

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      username: shortid.generate(),
    });

    sendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorResponse("Email or Password must be provided", 400));

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) return next(new ErrorResponse("Invalid Credentials", 401));

    const isMatch = await user.matchPasswords(password);

    if (!isMatch) return next(new ErrorResponse("Invalid Credentials", 401));

    sendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return next(new ErrorResponse("Email could not be send", 404));

    const resetToken = user.getResetPasswordToken();

    await user.save();

    const resetUrl = `${process.env.HOST}/auth/resetpassword/${resetToken}`;

    const message = `
      <h1>You have requested a password reset</h1>
      <p>Please go to this link to reset your password</p>
      <a href=${resetUrl} clicktracking=off><button>RESET PASSWORD</button></a>
    `;

    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset",
        html: message,
      });

      res.status(200).json({ success: true, data: "Email Sent" });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      return next(new ErrorResponse("Email could not be send", 500));
    }
  } catch (error) {
    next(error);
  }
};

exports.resetPassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) return next(new ErrorResponse("Invalid reset token", 400));

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({ success: true, data: "Password reset success" });
  } catch (error) {
    next(error);
  }
};
