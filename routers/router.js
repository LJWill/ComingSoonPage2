const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', indexPage);

router.get('/quiz', quizPage);

router.get('/quiz2', quizPage2);

router.get('/quiz3', quizPage3);

router.get('/quizWin', quizWin);

router.get('/diyHome', diyHome);
router.get('/diyTemplete', diyTemplete);

router.get('/login',loginPage);

router.get('/signup',signupPage);

router.get('/index', indexPage);

router.get('/evaluation', evaluation);




module.exports = router;