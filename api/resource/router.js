// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model.js");

const resourceRouter = express.Router();

resourceRouter.get("/", async (req, res, next) => {
  try {
    const resources = await Resource.getAll();
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

resourceRouter.post("/", async (req, res, next) => {
  const { resource_name } = req.body;
  if (!resource_name || typeof resource_name !== "string") {
    next({
      status: 400,
      message: "Resource name is required as a string.",
    });
  } else {
    try {
      const newResource = await Resource.create(req.body);
      res.status(201).json(newResource);
    } catch (err) {
      next(err);
    }
  }
});

resourceRouter.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = resourceRouter;
