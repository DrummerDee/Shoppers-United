const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = function (passport) {
  passport.use(new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
    var criteria = (username.indexOf('@') === -1) ? {username: username} : {email: username};
    User.findOne({ username: username.toLowerCase() }, (err, user) => {
      if (err) { return done(err) }
      if(!user) {return done(null, false, {message: 'Incorrect username.'}); }
      
      if (!user.password) {
        return done(null, false, { msg: 'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.' })
      }
      
      bcrypt.comparePassword(password, (err, isMatch) => {
        if (err) { return done(err) }
        if (isMatch) {
          return done(null, user)
        }
        return done(null, false, { msg:'Invalid username or password.' })
      })
    })
  }))


  
      
     
  
  
passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  });
    
}