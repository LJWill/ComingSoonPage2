const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', indexPage);

<<<<<<< HEAD
=======

router.get('/diyHome', diyHome);
router.get('/diyTemplete', diyTemplete);
>>>>>>> 024d2ce1983f8d43603742a07abb4327fc6b0fad
router.get('/quiz', quizPage);

router.get('/quiz2', quizPage2);

router.get('/quiz3', quizPage3);

router.get('/quizWin', quizWin);

<<<<<<< HEAD
router.get('/diyHome', diyHome);
router.get('/diyTemplete', diyTemplete);

router.get('/login',loginPage);

router.get('/signup',signupPage);

router.get('/index',indexPage);
=======
>>>>>>> 024d2ce1983f8d43603742a07abb4327fc6b0fad

module.exports = router;