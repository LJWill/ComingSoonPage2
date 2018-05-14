var db = require('../models/db.js'); // whatever you exported in db.js (in module.exports)
var passport = require('../app').passport;
var quiz = require('../models/quiz.js');

module.exports = {
    indexPage: function (req, res) {
        res.render('index.ejs', {
            user: req.user,
        });
    },
    diy: function (req, res) {
        res.render('diy.ejs', {
            user: req.user,
        });
    },
    quizPage: function (req, res) {
        res.render('quizPage.ejs', {
            title: "this is a quiz page",
            user: req.user,
            q: quiz.questions
        });
    },
    evaluation: function (req, res) {
        res.render('evaluation.ejs', {
            user: req.user,
        });
    },

    /* user api */

    // sign up
    signupPage: function (req, res) {
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
        });
    },

    // log in
    loginPage: function (req, res) {
        res.render('login.ejs', {
            message: req.flash('loginMessage'),
        });
    },

    // log out
    logout: function (req, res) {
        req.logout();
        res.redirect('/');
    },
};
