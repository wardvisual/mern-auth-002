const pkg = require("express-validator");
const { check, validationResult } = pkg;

exports.validateSignUpRequest = [
  check("email").isEmail().withMessage("Invalid email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

exports.validateSignInRequest = [
  check("email").isEmail().withMessage("Invalid email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0)
    return res.status(400).json({ error: errors.array()[0].msg });

  next();
};
