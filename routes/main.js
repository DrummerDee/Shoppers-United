const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth'); 
const homeController = require('../controllers/home');

// MC DID THIS
const forgotPassword = require('../controllers/forgotPasswordController')
// MC DID THIS

const { ensureAuth, ensureGuest } = require('../middleware/auth');

router.get('/', homeController.getIndex);
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/logout', authController.logout);
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);

// MC DID THIS
router.get('/forgotPassword',forgotPassword.getForgotPassword)
router.put('/forgotPassword', authController.putForgotPassword)
// MC DID THIS

module.exports = router;
