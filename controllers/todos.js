const Todo = require('../models/Todo');
// const User = require('../models/User');
const Group = require("../models/Group");

module.exports = {
  getGroupTodos: async (req, res) => {
    const groupId = req.params.groupId;
    console.log(groupId);
    try {
      const groupTodos = await Todo.find({ groupId: groupId });
      const group = await Group.find({ _id: groupId });
      console.log({ groupTodos });
      res.render("groupTodos.ejs", {
        group: group,
        groupTodos: groupTodos,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getTodos: async (req, res) => {
    console.log(req.user);
    try {
      const todoItems = await Todo.find({ userId: req.user.id });
      const itemsLeft = await Todo.countDocuments({
        userId: req.user.id,
        completed: false,
      });
      res.render("todos.ejs", {
        todos: todoItems,
        left: itemsLeft,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createTodo: async (req, res) => {
    const groupId = req.params.groupId;
    console.log(groupId);
    try {
      await Todo.create({
        todo: req.body.todoItem,
        completed: false,
        userId: req.user.id,
        groupId: groupId,
      });
      console.log("Todo has been added!");
      res.redirect("/todos/" + groupId);
    } catch (err) {
      console.log(err);
    }
  },
  markComplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        {
          completed: true,
        }
      );
      console.log("Marked Complete");
      res.json("Marked Complete");
    } catch (err) {
      console.log(err);
    }
  },
  markIncomplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        {
          completed: false,
        }
      );
      console.log("Marked Incomplete");
      res.json("Marked Incomplete");
    } catch (err) {
      console.log(err);
    }
  },
  deleteTodo: async (req, res) => {
    console.log(req.body.todoIdFromJSFile);
    try {
      await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile });
      console.log("Deleted Todo");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};
// module.exports = {
//     getTodos: async (req,res)=>{
//         console.log(req.user)
//         try{
//             const todoItems = await Todo.find({userId:req.user.id})
//             const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
//             res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
//         }catch(err){
//             console.log(err)
//         }
//     },
//     createTodo: async (req, res)=>{
//         try{
//             await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id, shared:false,})
//             console.log('Todo has been added!')
//             res.redirect('/todos')
//         }catch(err){
//             console.log(err)
//         }
//     },
//     markComplete: async (req, res)=>{
//         try{
//             await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
//                 completed: true
//             })
//             console.log('Marked Complete')
//             res.json('Marked Complete')
//         }catch(err){
//             console.log(err)
//         }
//     },
//     markIncomplete: async (req, res)=>{
//         try{
//             await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
//                 completed: false
//             })
//             console.log('Marked Incomplete')
//             res.json('Marked Incomplete')
//         }catch(err){
//             console.log(err)
//         }
//     },
//   markShared: async (req, res)=>{
//     try{
//         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
//             shared: true
//         })
//         console.log('Task Shared')
//         res.json('Task Shared')
//     }catch(err){
//         console.log(err)
//         res.render('404')
//     }
// },
// markUnshared: async (req, res)=>{
//     try{
//         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
//             shared: false
//         })
//         console.log('Task unshared')
//         res.json('Task unshared')
//     }catch(err){
//         console.log(err)
//         res.render('error/404.ejs')
//     }
// },
//   deleteTodo: async (req, res) => {
//     console.log(req.body.todoIdFromJSFile);
//     try {
//       await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile });
//       console.log("Deleted Todo");
//       res.json("Deleted It");
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   collab: async (req, res) => {
//     try {
//       const key = req.body.collabKey;
//       const collabUser = await User.find({_id: req.body.collabKey })
//       const todoItems = await Todo.find({ userId: req.body.collabKey });
//       const itemsLeft = await Todo.countDocuments({
//         userId: req.body.collabKey,
//         completed: false,
//       });
//       console.log(collabUser)
//       res.render("collab.ejs", {
//         key: key,
//         todos: todoItems,
//         left: itemsLeft,
//         user: req.user,
//         collabUser: collabUser[0].userName,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   createTodoCollab: async (req, res) => {
//     console.log(req);
//     try {
//       await Todo.create({
//         todo: req.body.todoItem,
//         completed: false,
//         userId: req.body.key,
//       });
//       console.log("Collab todo has been added!");
//       res.redirect("/todos");
//     } catch (err) {
//       console.log(err);
//     }
//   },
// }    
