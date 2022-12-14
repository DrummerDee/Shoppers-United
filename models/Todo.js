const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  groupId: {
    type: String,
    required: true,
  },
  doneBy: {
    type: String,
  },
  // shared:{
  //   type:Boolean,
  //   required: true
  // },
  // sharedWith:{
  //   type:String,
  //   required:false
  // }
});

module.exports = mongoose.model("Todo", TodoSchema);
