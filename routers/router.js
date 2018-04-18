const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', indexPage);

router.get('/quiz', quizPage);

module.exports = router;