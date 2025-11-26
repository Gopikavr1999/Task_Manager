const express = require("express");
const { createTasks, updateTasks, getTasks, deleteTask } = require("../controllers/taskController");
const {auth} = require("../middleware/auth");
const { validateTask } = require("../middleware/validateTask");

const router = express.Router();

//Create
router.post("/createTask", auth, validateTask, createTasks);

//Get
router.get("/", auth, getTasks);

//Update
router.put("/:id", auth, validateTask, updateTasks);

//Delete
router.delete("/:id", auth, deleteTask);

module.exports = router;