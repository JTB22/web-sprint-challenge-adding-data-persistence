// build your server here and require it from index.js
const express = require("express");

const serverRouter = express.Router();

serverRouter.use(express.json());

serverRouter.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = serverRouter;
