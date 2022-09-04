const validator = require('validator')
const User = require('../models/User')
let user = {
    email: "bob1@gmail.com",
}
module.exports = {
    postForgot: (req, res, next) => {
        const { email } = req.body;
        res.send(email);
        console.log(req.body)
        
        //validation errors 
        const validationErrors = []
        if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })

        // check that user exists in the Shoppers United Database 
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

