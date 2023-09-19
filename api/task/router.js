// build your `/api/tasks` router here
const express = require("express");
const Task = require("./model.js");

const taskRouter = express.Router();

taskRouter.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.getAll();
    tasks.forEach((task) => {
      if (task.task_completed === 0) {
        task.task_completed = false;
      } else {
        task.task_completed = true;
      }
    });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

taskRouter.post("/", async (req, res, next) => {
  const { task_description } = req.body;
  if (!task_description || typeof task_description !== "string") {
    next({
      status: 400,
      message: "Task description is required as a string.",
    });
  } else {
    try {
      const newTask = await Task.create(req.body);
      if (newTask.task_completed === 0) {
        newTask.task_completed = false;
      } else {
        newTask.task_completed = true;
      }
      res.status(201).json(newTask);
    } catch (err) {
      next(err);
    }
  }
});

taskRouter.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = taskRouter;
