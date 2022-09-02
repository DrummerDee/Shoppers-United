const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos");
const groupsController = require("../controllers/groups");
const { ensureAuth } = require("../middleware/auth");

// router.get('/', ensureAuth, todosController.getTodos)
// Get groups list
router.get("/", ensureAuth, groupsController.getGroups);
// show create group view
router.get("/createGroup", groupsController.showCreateGroup);

// create group
router.post("/createGroup", groupsController.createGroup);

router.post("/createTodo", todosController.createTodo);

router.put("/markComplete", todosController.markComplete);

router.put("/markIncomplete", todosController.markIncomplete);

router.delete("/deleteTodo", todosController.deleteTodo);

module.exports = router;
