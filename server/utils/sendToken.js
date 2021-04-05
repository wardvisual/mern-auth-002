const sendToken = (user, statusCode, res) => {
  res
    .cookie("token", user.getSignedToken(), {
      httpOnly: true,
      secure: true,
      sameSite: true,
    })
    .status(statusCode)
    .json({ success: true, token: user.getSignedToken() });
};

module.exports = sendToken;
