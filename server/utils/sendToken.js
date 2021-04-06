const sendToken = (user, statusCode, res) => {
  res.status(statusCode).json({ success: true, token: user.getSignedToken() });
};

module.exports = sendToken;

//  .cookie("token", user.getSignedToken(), {
//     httpOnly: true,
//     secure: true,
//     sameSite: true,
//   })
