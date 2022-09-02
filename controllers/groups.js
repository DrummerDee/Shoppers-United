const Group = require("../models/Group");

module.exports = {
  getGroups: async (req, res) => {
    // console.log(req.user);
    // get the groups where the logged in user is in
    try {
      //   const groups = await Group.find({ [req.user._id]: { $in: { users } } });
      const groups = await Group.find().populate("users").lean();
      console.log(groups);
      console.log(groups[0].users);
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
};
