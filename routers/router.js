const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', indexPage);

router.get('/quiz', quizPage);

router.get('/quiz2', quizPage2);

router.get('/quiz3', quizPage3);

router.get('/quizWin', quizWin);

module.exports = router;