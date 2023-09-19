// build your `Task` model here
const db = require("../../data/dbConfig.js");

const getAll = () => {
  return db("tasks");
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
