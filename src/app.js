const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const app = express();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db

// init routes
app.use("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello World",
  });
});

module.exports = app;