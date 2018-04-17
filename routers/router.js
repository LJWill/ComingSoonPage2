const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', indexPage);

router.get('/login',loginPage);

router.get('/signup',signupPage);

module.exports = router;