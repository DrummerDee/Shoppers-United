const Group = require("../models/Group");
const mongoose = require("mongoose");
const User = require("../models/User");

module.exports = {
    getUser: (req, res) => {
        res.render('user.ejs',{ groupId: groupId })
    }
}