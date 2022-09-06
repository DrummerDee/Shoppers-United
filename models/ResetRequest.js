const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const passportLocalMongoose 
    = require("passport-local-mongoose");
  
mongoose.connect(
"mongodb://localhost:27017/passport-forget", {
    useNewUrlParser: true
});

app.use(passport.initialize());
const userSchema = new mongoose.Schema({
   username: String,
   password: String,
});
userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
      done(err, user);
  });
});