const Group = require("../models/Group");
const mongoose = require("mongoose");
const Todo = require("../models/Todo");

module.exports = {
  getGroups: async (req, res) => {
    // console.log(req.user);
    // get the groups where the logged in user is in
    try {
      //   const groups = await Group.find({ [req.user._id]: { $in: { users } } });
      const groups = await Group.find({
        users: mongoose.Types.ObjectId(req.user._id),
      })
        .populate("users")
        .lean();
      // console.log(groups);
      res.render("groups.ejs", { groups: groups, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createGroup: async (req, res) => {
    let groupName = req.body.groupName;
    try {
      await Group.create({
        name: groupName,
        users: [req.user],
        createdBy: req.user._id,
      });
      console.log("group created");
      res.redirect("/groups");
    } catch (err) {
      console.log(err);
    }
  },
  showCreateGroup: (req, res) => {
    if (req.user) {
      res.render("createGroup", { user: req.user });
    }
  },
  showAddUserTogroup: (req, res) => {
    const groupId = req.params.groupId;
    // console.log({ groupId });
    res.render("addUserToGroup.ejs", { groupId: groupId });
  },
  addUserToGroup: async (req, res) => {
    const groupId = req.params.groupId;
    const userToAdd = req.body.userToAdd;
    const groupAdminId = req.user._id;
    // console.log({ groupId, userToAdd });
    try {
      let group = await Group.find({ _id: groupId });
      console.log(group[0].users.includes(userToAdd));
      if (groupAdminId == group[0].createdBy) {
        if (!group[0].users.includes(userToAdd)) {
          group[0].users.push(userToAdd);
          await Group.updateOne({ _id: groupId }, { $set: group[0] });
          res.redirect("/groups");
        }
      } else {
        throw new Error("you are not the admin of this group");
      }
    } catch (err) {
      console.log(err);
    }
  },
  // show delete user form
  showDeleteUserFromGroup: (req, res) => {
    // for enhancement we could get all users here so we could pass them to the view and select user instead of put the userId --future enhancement
    const groupId = req.params.groupId;
    res.render("deleteUserFromGroup.ejs", { groupId: groupId });
  },
  // Delete user
  deleteUserFromGroup: async (req, res) => {
    const groupId = req.params.groupId;
    const userToDelete = req.body.userToDelete;
    const groupAdminId = req.user._id;
    try {
      let group = await Group.find({ _id: groupId });
      // console.log(group[0].users.includes(userToAdd));
      if (groupAdminId == group[0].createdBy) {
        if (group[0].users.includes(userToDelete)) {
          // console.log("group[0] before filter", group[0]);
          group[0].users = group[0].users.filter((id) => id != userToDelete);
          // console.log("group[0] after filter", group[0]);
          await Group.updateOne({ _id: groupId }, { $set: group[0] });
          // let groupAfter = await Group.find({ _id: groupId });
          // console.log("group after update", groupAfter);
          await Todo.deleteMany({ userId: userToDelete, groupId: groupId });
          res.redirect("/groups");
        }
      } else {
        throw new Error("you are not the admin of this group");
      }
    } catch (err) {
      console.log(err);
    }
  },
};
