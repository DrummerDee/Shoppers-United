const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todos')
const bcrypt = require('bcrypt')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  


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



app.use('/', mainRoutes)
app.use('/todos', todoRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    