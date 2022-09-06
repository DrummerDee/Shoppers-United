const validator = require('validator');
const User = require('../models/User');
const { getForgotPassword } = require('./auth');

// MC MADE THIS
// const express = require('express').Router;
// const router = express();
// const bcrypt = require('bcrypt');
// const {v4: uuidv4} = require('uuid');
// const { createUser, getUser, updateUser } = require("../model/users");
// const { createResetRequest, getResetRequest } = require("../model/resetRequests");
// const sendResetLink = require("./sendEmail");
// MC MADE THIS


//DD Put this together//

// var errors = req.validationErrors();

// if (errors) {
//   req.flash('errors', errors);
//   return res.redirect('/signup');
// }

// var user = User.build({
//   email: req.body.email,
//   password: req.body.password,
// });

// User
// .find({ where: { email: req.body.email } })
// .then(function(existingUser){
//   if (existingUser) {
//     req.flash('errors', { msg: 'Account with that email address already exists.' });
//     return res.redirect('/signup');
//   }

//   user
//   .save()
//   .complete(function(err){
//     if (err) return next(err);
//     req.logIn(user, function(err){
//       if (err) return next(err);
//       res.redirect('/');
//     });
//   });
// }).catch(function(err){
//   return next(err);
// });
// ;

// module.exports = {

//     postForgotPassword: (req,res,next) => {
//         passport.use('local-signup', new LocalStrategy({
//             // by default, local strategy uses username and password, we will override with email
//             usernameField: 'email',
//             passwordField: 'password',
//             passReqToCallback: true, // allows us to pass back the entire request to the callback
//             // asynchronous
//             // User.findOne wont fire unless data is sent back
//             function (req, email, password, done) {
//             process.nextTick(function () {
//                 // find a user whose email is the same as the forms email
//                 // we are checking to see if the user trying to login already exists
//                 User.findOne({'local.email': email}, function (err, user) {
//                     // if there are any errors, return the error
//                     if (err) {
//                         return done(err);
//                     }
    
//                     // check to see if theres already a user with that email
//                     if (user) {
//                         console.log('that email exists');
//                         return done(null, false, req.flash('signupMessage', email + ' is already in use. '));
    
//                     } else {
//                         User.findOne({'local.username': req.body.username}, function (err, user) {
//                             if (user) {
//                                 console.log('That username exists');
//                                 return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
//                             }
    
//                             if (req.body.password != req.body.confirm_password) {
//                                 console.log('Passwords do not match');
//                                 return done(null, false, req.flash('signupMessage', 'Your passwords do not match'));
//                             }
    
//                             else {
//                                 // create the user
//                                 var newUser = new User();
    
//                                 var permalink = req.body.username.toLowerCase().replace(' ', '').replace(/[^\w\s]/gi, '').trim();
    
//                                 var verification_token = randomstring.generate({
//                                     length: 64
//                                 });
    
    
//                                 newUser.local.email = email;
    
//                                 newUser.local.password = newUser.generateHash(password);
    
//                                 newUser.local.permalink = permalink;
    
//                                 //Verified will get turned to true when they verify email address
//                                 newUser.local.verified = false;
//                                 newUser.local.verify_token = verification_token;
    
//                                 try {
//                                     newUser.save(function (err) {
//                                         if (err) {
    
//                                             throw err;
//                                         } else {
//                                             VerifyEmail.sendverification(email, verification_token, permalink);
//                                             return done(null, newUser);
//                                         }
//                                     });
//                                 } catch (err) {
    
//                                 }
//                             }
//                         });
//                     }
//                 });
//             });
//     })}};
 //if user exist create one time link 
        //create JWT token 
        // const secret = JWT_secret + user.password

        // const payload = {
        //     email: user.email,
        //     id: user.id
        // }
        // const token = jwt.sign(payload, secret, { expiresIn: '15m' });
        // const link = `http://localhost:2121/reset-password/${user.id}/${token}`

        // console.log(link);
        // res.send('Password reset link has been sent');

//DD Put This Together//


module.exports = {
    postForgotPassword: async(req, res)=>{
        User.email({
            username: req.body.username
        }, req.body.password, function (err) {
            if (err) {
                res.send(err);
            } else {
                res.send('successfully sent Email')
            }
        });
     },
     
    getForgotPassword: async(req, res) => {
        User.findByUsername(req.body.username, (err, user) => {
            if (err) {
                res.send(err);
            } else {
                user.changePassword(req.body.oldpassword, 
                req.body.newpassword, function (err) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send('successfully change password');
                    }
                });
            }
        })}
    }