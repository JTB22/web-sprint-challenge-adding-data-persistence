/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("projects").del();
  await knex("projects").insert([
    {
      project_name: "Project 1",
      project_description: "Description 1",
      project_completed: false,
    },
    {
      project_name: "Project 2",
      project_description: "Description 2",
      project_completed: false,
    },
    {
      project_name: "Project 3",
      project_description: "Description 3",
      project_completed: false,
    },
  ]);
  await knex("resources").del();
  await knex("resources").insert([
    { resource_name: "Resource 1", resource_description: "Description 1" },
    { resource_name: "Resource 2", resource_description: "Description 2" },
    { resource_name: "Resource 3", resource_description: "Description 3" },
  ]);
  await knex("tasks").del();
  await knex("tasks").insert([
    {
      task_description: "Task 1",
      task_notes: "Notes 1",
      task_completed: false,
      project_id: 1,
    },
    {
      task_description: "Task 2",
      task_notes: "Notes 2",
      task_completed: false,
      project_id: 1,
    },
    {
      task_description: "Task 3",
      task_notes: "Notes 3",
      task_completed: false,
      project_id: 2,
    },
    {
      task_description: "Task 4",
      task_notes: "Notes 4",
      task_completed: false,
      project_id: 2,
    },
    {
      task_description: "Task 5",
      task_notes: "Notes 5",
      task_completed: false,
      project_id: 3,
    },
    {
      task_description: "Task 6",
      task_notes: "Notes 6",
      task_completed: false,
      project_id: 3,
    },
  ]);
  await knex("project_resources").del();
  await knex("project_resources").insert([
    { project_id: 1, resource_id: 1 },
    { project_id: 1, resource_id: 2 },
    { project_id: 1, resource_id: 3 },
    { project_id: 2, resource_id: 2 },
    { project_id: 2, resource_id: 3 },
    { project_id: 3, resource_id: 1 },
    { project_id: 3, resource_id: 2 },
  ]);
};
