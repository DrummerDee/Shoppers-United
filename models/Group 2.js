const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  users: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    required: true,
  },
  // createdBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  // },
});

module.exports = mongoose.model("Group", GroupSchema);