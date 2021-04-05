const router = require("express").Router();

const {
  register,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");
const {
  validateSignUpRequest,
  isRequestValidated,
  validateSignInRequest,
} = require("../validators/auth");

router.post("/register", validateSignUpRequest, isRequestValidated, register);
router.post("/login", validateSignInRequest, isRequestValidated, login);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetPassword);

module.exports = router;
