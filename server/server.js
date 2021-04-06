require("dotenv").config();
const express = require("express");
const path = require("path");

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

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log("LISTENING ON PORT", PORT));

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error ${err}`);
  server.close(() => process.exit(1));
});
