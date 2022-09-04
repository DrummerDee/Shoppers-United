const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)

//signup//
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
//signup//

// router.get('/forgotPassword', authController.getForgot)
// router.post('/forgotPassword', authController.postForgot)

module.exports = router