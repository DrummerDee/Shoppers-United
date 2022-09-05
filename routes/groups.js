const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos");
const groupsController = require("../controllers/groups");
const { ensureAuth } = require("../middleware/auth");

// router.get('/', ensureAuth, todosController.getTodos)

// router.post('/createTodo', todosController.createTodo)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

// router.post("/collab", todosController.collab);

// router.get("/collab", todosController.collab);

// router.put('/markShared', todosController.markShared);

// router.put('/markUnshared', todosController.markUnshared);

// Get groups list
router.get("/", ensureAuth, groupsController.getGroups);
// show create group view
router.get("/createGroup", groupsController.showCreateGroup);

// create group
router.post("/createGroup", groupsController.createGroup);

// router.get('/', ensureAuth, todosController.getTodos)
router.get("/:groupId", ensureAuth, todosController.getGroupTodos);
router.post("/createTodo/:groupId", todosController.createTodo);

// show add user form
router.get(
  "/addUser/:groupId",
  ensureAuth,
  groupsController.showAddUserTogroup
);
// add user to a specific group

// show delete user form
router.get(
  "/deleteUser/:groupId",
  ensureAuth,
  groupsController.showDeleteUserFromGroup
);

// add user to a specific group
router.post("/addUserToGroup/:groupId", groupsController.addUserToGroup);

// delete user from a specific group
router.post(
  "/deleteUserFromGroup/:groupId",
  groupsController.deleteUserFromGroup
);

router.put("/markComplete", todosController.markComplete);

router.put("/markIncomplete", todosController.markIncomplete);

router.delete("/deleteTodo", todosController.deleteTodo);

//get page for group settings
// router.get("/group-settings/:groupId",ensureAuth,groupsController.showGroupSettings);
module.exports = router;
