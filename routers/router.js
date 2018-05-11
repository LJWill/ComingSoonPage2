const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const quiz = require('../models/quiz.js');

router.get('/', indexPage);

router.get('/quiz', (req, res) => {
    res.render('quizPage.ejs', {
        score: '666',
        q: quiz.questions
    });
});

router.get('/quiz2', quizPage2);

router.get('/quiz3', quizPage3);

router.get('/quizWin', quizWin);

router.get('/diy', diy);

router.get('/login',loginPage);

router.get('/signup',signupPage);

router.get('/index',indexPage);

router.get('/evaluation', evaluation);

module.exports = router;