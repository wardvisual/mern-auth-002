require("dotenv").config();
const express = require("express");

const connectDB = require("./config/db");
const cors = require("./config/cors");
const errorHandler = require("./middleware/error");
const app = express();

connectDB();

cors(app);

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

app.use("/api/data", require("./routes/private"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log("LISTENING ON PORT", PORT));

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error ${err}`);
  server.close(() => process.exit(1));
});
