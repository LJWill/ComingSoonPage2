var passport = require('../app').passport;
var quizfile = require('../models/quiz.js');
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
    quizPage: async function (req, res) {
        var quizzes = await getquiz();
        console.log(quizzes);
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

    /* temp: insert quizzes */
    insertQuizzes: function(req, res){
        var quizs = quizfile.questions;
        for (i=0; i<quizs.length; i++){
            var tempquiz = new Quiz();
            tempquiz.question =quizs[i].question;
            for(j=0; j<4; j++){
                tempquiz.options[j] = quizs[i].option[j];
            }
            tempquiz.answer = quizs[i].correctIndex;
            tempquiz.save(function(err, save){

            });

        }
        res.send("done");
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

async function getquiz(){
    var randomnumbers = [];
    await Quiz.count({}, function(err, count) {
        while (randomnumbers.length < 3) {
            var randomnumber = Math.floor(Math.random() * count);
            if(randomnumbers.indexOf(randomnumber) == -1) {
                randomnumbers[randomnumbers.length] = randomnumber;
            }
        }
    });
    console.log(randomnumbers);
    var quizzes0 = Quiz.findOne().skip(randomnumbers[0]).then(result =>   {return result});
    var quizzes1 = Quiz.findOne().skip(randomnumbers[1]).then(result =>   {return result});
    var quizzes2 = Quiz.findOne().skip(randomnumbers[2]).then(result =>   {return result});
    return [await quizzes0, await quizzes1, await quizzes2];
}