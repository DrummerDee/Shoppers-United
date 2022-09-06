const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = function (passport) {
  passport.use(new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
    var criteria = (username.indexOf('@') === -1) ? {username: username} : {email: username};
    User.findOne(criteria, { username: username.toLowerCase() }, (err, user) => {
      if (err) { return done(err) }
      if(!user) {return done(null, false, {message: 'Incorrect username.'}); }
      
      if (!user.password) {
        return done(null, false, { msg: 'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.' })
      }
      
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) { return done(err) }
        if (isMatch) {
          return done(null, user)
        }
        return done(null, false, { msg:'Invalid username or password.' })
      })
    })
  }))

  function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next()
    res.redirect('/login')
  }
  
  function isLoggedOut(req, res, next){
    if(!req.isAuthenticated()) return next()
    res.redirect('/logout')
  }
  
  app.get('/', isLoggedIn, (req, res) => {
    res.render("index", {title: "Home"});
  })
  
  app.get('/login', isLoggedOut, (req, res) => {
  
    const response = {
        title: "login",
        error: req.query.error
    }
    res.render('login', response)
  } );
  
  app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login?error=true'
  }));
  
  app.get('logout', function (req, res) {
    req.logout();
    res.redirect('/')
  });
  


  //Setup Our admin

app.get('/setup', async(req, res) =>{
  const exists = await User.exists({username: "admin"})

  if(exists) {
      res,redirect('/login');
      return;
  };

  bcrypt.genSalt(10, function(err, salt){
      if(err) return next(err);
      
      bcrypt.hash("password", salt, function(err, hash){
          if(err) return next(err);

          const newAdmin = new User({
              username: "admin",
              password: hash
          });
          newAdmin.save();

          res.redirect('/login')
      } )
  })
})


      
     
  
  
passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  });
    
}