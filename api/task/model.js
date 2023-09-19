// build your `Task` model here
const db = require("../../data/dbConfig.js");

const getAll = () => {
  return db("tasks")
    .join("projects", "tasks.project_id", "projects.project_id")
    .select(
      "task_id",
      "task_description",
      "task_notes",
      "task_completed",
      "project_name",
      "project_description"
    );
};

const getById = (task_id) => {
  return db("tasks").where("task_id", task_id).first();
};

const create = async (task) => {
  const [task_id] = await db("tasks").insert(task);
  return getById(task_id);
};

module.exports = {
  getAll,
  getById,
  create,
};
