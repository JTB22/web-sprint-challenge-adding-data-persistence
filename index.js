// start your server here
const express = require("express");
const serverRouter = require("./api/server.js");

const server = express();
const port = process.env.PORT || 9000;

server.use(express.json());
server.use("/api", serverRouter);

server.get("/", (req, res) => {
  res.send("No World!");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
