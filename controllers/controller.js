var quizfile = require('../models/quiz.js');
var Quiz = require('../models/quiz_model.js');
// var Image = require('../models/image_model');
// var fs = require("fs");
// var path = require("path");

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
        // console.log(quizzes);
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
            tempquiz.answer = quizs[i].answer;
            tempquiz.description = quizs[i].description;
            tempquiz.save(function(err, save){
                if (err) throw err;
            });
        }
        res.send("done");
    },
    google: function(req, res){
        res.render("google.ejs", {
            user:req.user,
        })
    },

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
    var count = await Quiz.count();
    while (randomnumbers.length < 3) {
        var randomnumber = Math.floor(Math.random() * count);
        if(randomnumbers.indexOf(randomnumber) == -1) {
            console.log("ran = "+randomnumber);
            randomnumbers[randomnumbers.length] = randomnumber;
        }
    }

    console.log("randomnumbers = " + randomnumbers);
    var quizzes0 = Quiz.findOne().skip(randomnumbers[0]).then(result =>   {return result});
    var quizzes1 = Quiz.findOne().skip(randomnumbers[1]).then(result =>   {return result});
    var quizzes2 = Quiz.findOne().skip(randomnumbers[2]).then(result =>   {return result});

    return [await quizzes0, await quizzes1, await quizzes2];
}