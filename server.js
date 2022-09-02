const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todos')
const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

require('dotenv').config({path: './config/.env'},{ debug: process.env.DEBUG })

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
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
  
app.use('/', mainRoutes)
app.use('/todos', todoRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    

const dbName = 'shoppers-united'

MongoClient.connect(DB_STRING, { useUnifiedTopology: true }, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.error(err);
  console.log('Connected to Database');

  const db = client.db('shoppers-united');
  const itemsCollection = db.collection('items');
})