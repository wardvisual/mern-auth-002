const cors = require("cors");

module.exports = (app) => {
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      method: ["GET", "POST", "PUT"],
      credentials: true,
    })
  );
};
