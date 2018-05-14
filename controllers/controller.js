var passport = require('../app').passport;
var quiz = require('../models/quiz.js');
var Quiz = require('../models/quiz_module.js');

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
        var quizzes = [];
        // Get the count of all quizzes
        var count = 0;

        Quiz.count({}, function(err, count){
            console.log(count);
        });
        // Generate 3 unique index in the range of quizzes numbers
        var arr = [];
        while(arr.length < 3){
            console.log(count);
            var randomnumber = Math.floor(Math.random()*count);
            if(arr.indexOf(randomnumber) > -1) {
                arr[arr.length] = randomnumber;
                quizzes[quizzes.length] = Quiz.findOne().skip(randomnumber);
                // console.log(quizzes);
            }
        };
        res.render('quizPage.ejs', {
            title: "this is a quiz page",
            user: req.user,
            q: quizzes
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

    isLoggedIn: function (req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/login');
    }
};

