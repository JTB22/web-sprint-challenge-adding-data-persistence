// build your `/api/projects` router here
const express = require("express");
const Project = require("./model.js");

const projectRouter = express.Router();

projectRouter.get("/", async (req, res, next) => {
  try {
    const projects = await Project.getAll();
    projects.forEach((project) => {
      if (project.project_completed === 0) {
        project.project_completed = false;
      } else {
        project.project_completed = true;
      }
    });
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

projectRouter.post("/", async (req, res, next) => {
  const { project_name } = req.body;
  if (!project_name || typeof project_name !== "string") {
    next({
      status: 400,
      message: "Project name is required as a string.",
    });
  } else {
    try {
      const newProject = await Project.create(req.body);
      if (newProject.project_completed === 0) {
        newProject.project_completed = false;
      } else {
        newProject.project_completed = true;
      }
      res.status(201).json(newProject);
    } catch (err) {
      next(err);
    }
  }
});

projectRouter.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = projectRouter;
