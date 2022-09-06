const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth'); 
const homeController = require('../controllers/home');
const forgotPassword = require('../controllers/forgotPasswordController')


const { ensureAuth, ensureGuest } = require('../middleware/auth');

router.get('/', homeController.getIndex);
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/logout', authController.logout);
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);

router.post('/forgotPassword', forgotPassword.postForgotPassword);
router.get('/changePassword', forgotPassword.getForgotPassword);

module.exports = router;
