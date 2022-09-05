const validator = require('validator');
const User = require('../models/User');

// MC MADE THIS
// const express = require('express').Router;
// const router = express();
// const bcrypt = require('bcrypt');
// const {v4: uuidv4} = require('uuid');
// const { createUser, getUser, updateUser } = require("../model/users");
// const { createResetRequest, getResetRequest } = require("../model/resetRequests");
// const sendResetLink = require("./sendEmail");
// MC MADE THIS

module.exports = {
    postForgot: (req, res, next) => {
        const { email } = req.body;
        res.send(email);
        console.log(req.body)
        
        //validation errors 
        const validationErrors = []
        if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })

        // check that user exists in the Shoppers United Database
        userEmail : user.email 
        if (email !== user.email) {
            res.send('User is not registered')
            return
        }
 //if user exist create one time link 
        //create JWT token 
        const secret = JWT_secret + user.password

        const payload = {
            email: user.email,
            id: user.id
        }
        const token = jwt.sign(payload, secret, { expiresIn: '15m' });
        const link = `http://localhost:2121/reset-password/${user.id}/${token}`

        console.log(link);
        res.send('Password reset link has been sent');
    }
}


// MC made this to create the forgotten password
// This sends the email to the email address

// router.post("/signup", (req,res)=>{
//     bcrypt.hash(req.body.password, 10).then(hashed =>{
//         const user = {
//             email: req.body.email,
//             password: hashed,
//         };
//         createUser(user);
//         res.status(201).json();
//     })
// });

// router.post("/login", (req,res)=>{
//     const thisUser = getUser(req.body.email);
//     if(thisUser){
//         bcrypt.compare(req.body.password, thisUser.password).then(result=>{
//             if(result){
//                 const token = v4();
//                 res.status(200).json({token});
//             } else {
//                 res.status(401).json({message: "Access denied"})
//             }
//         });
//     }else{
//         res.status(401).json({message: "Access denied"});
//     }
// });

// router.post("/forgot", (req,res)=>{
//     const thisUser = getUser(req.body.email);
//     if(thisUser){
//         const id = v4();
//         const request = {
//             id,
//             email: thisUser.email,
//         };
//         createResetRequest(request);
//         sendResetLink(thisUser.email, id);
//     }
//     res.status(200).json();
// });

// router.patch("/reset", (req,res)=>{
//     const thisRequest = getResetRequest(req.body.id);
//     if(thisRequest){
//         const user = getUser(thisRequest.email);
//         bcrypt.hash(req.body.password, 10).then(hashed =>{
//             user.password = hashed;
//             updateUser(user);
//             res.status(204).json();
//         })
//     }else{
//         res.status(404).json();
//         }
// });

// module.exports = router
// MC made this to create the forgotten password



