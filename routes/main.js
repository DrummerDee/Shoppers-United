const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth'); 
const homeController = require('../controllers/home');
const forgotController = require('../controllers/forgot');
const { ensureAuth, ensureGuest } = require('../middleware/auth');

router.get('/', homeController.getIndex);
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/logout', authController.logout);
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);
router.get('/forgot-password', forgotController.getForgot);
// router.post('/forgot-password',(req,res,next) => {

// });

// router.get('/reset-password', resetController.getReset);

// app.post('/reset-password', (req,res,next) => {

// });


module.exports = router