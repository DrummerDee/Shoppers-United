const express = require("express");
const router = express.Router();
const groupsController = require("../controllers/groups");
const userController = require("../controllers/user");

//get user setting page
router.get('/:groupId/user', userController.getUser);


module.exports = router;