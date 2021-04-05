const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  console.log(err);

  if (err.code === 11000)
    return (error = new ErrorResponse(`Duplicate Field Value Enter`, 400));

  if (err.name === "ValidationError")
    return new ErrorResponse(
      Object.values(err.errors.map((val) => val.message)),
      400
    );

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || "Server Error" });
};

module.exports = errorHandler;
