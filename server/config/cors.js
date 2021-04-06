const cors = require("cors");

module.exports = (app) => {
  app.use(
    cors({
      origin: process.env.HOST,
      method: ["GET", "POST", "PUT"],
      credentials: true,
    })
  );
};
