const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const corsOrigin = process.env.CORS_ORIGIN;
const corsOptions = corsOrigin
  ? {
      origin: corsOrigin.split(",").map((value) => value.trim())
    }
  : undefined;

app.use(cors(corsOptions));
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", routes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

module.exports = app;
