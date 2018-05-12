var db = require('../models/db.js'); // whatever you exported in db.js (in module.exports)
var passport = require('../app').passport;
var quiz = require('../models/quiz.js');

module.exports = {
    indexPage: function (req, res) {
        res.render('index.ejs', {
            user: req.user
        });
    },
    diy: function (req, res) {
        res.render('diy.ejs', {

        });
    },
    quizPage: function (req, res) {
        res.render('quizPage.ejs', {
            title: "this is a quiz page",
            groupMembers: db.groupMembers,
            q: quiz.questions
        });
    },
    quizPage2: function (req, res) {
        res.render('quizPage2.ejs', {
            title: "this is a quiz page",
            groupMembers: db.groupMembers
        });
    },
    quizPage3: function (req, res) {
        res.render('quizPage3.ejs', {
            title: "this is a quiz page",
            groupMembers: db.groupMembers
        });
    },
    quizWin: function (req, res) {
        res.render('quizWin.ejs', {
            title: "this is a quiz page",
            groupMembers: db.groupMembers

        });
    },
    evaluation: function (req, res) {
        res.render('evaluation.ejs', {

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
        var user = req.user;
        user.local.email = undefined;
        user.local.password = undefined;
        user.save(function (err) {
            res.redirect('/');
        });
    },
};
