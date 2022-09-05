const Group = require("../models/Group");
const mongoose = require("mongoose");

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
      console.log(groups);
      //   console.log(groups[0].users);
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
      });
      console.log("group created");
      res.redirect("/todos");
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
    console.log({ groupId });
    res.render("addUserToGroup.ejs", { groupId: groupId });
  },
  addUserToGroup: async (req, res) => {
    const groupId = req.params.groupId;
    const userToAdd = req.body.userToAdd;
    console.log({ groupId, userToAdd });
    try {
      let group = await Group.find({ _id: groupId });
      console.log(group[0].users.includes(userToAdd));
      if (!group[0].users.includes(userToAdd)) {
        group[0].users.push(userToAdd);
        await Group.updateOne({ _id: groupId }, { $set: group[0] });
        res.redirect("/todos");
      }
    } catch (err) {
      console.log(err);
    }
  },
};