var db = require('../models/db.js');    // whatever you exported in db.js (in module.exports)

module.exports = indexPage = function (req, res) {
    res.render('index.ejs', {

        title: db.comingSoon,
        groupMembers : db.groupMembers
    });
};

module.exports = diyHome = function (req, res) {
    res.render('diyHome.ejs', {

    });
};

module.exports = diyTemplete = function (req, res) {
    res.render('diyTemplete.ejs', {
      });
};

module.exports = quizPage = function (req, res) {
    res.render('quizPage.ejs', {
        title: "this is a quiz page",
        groupMembers: db.groupMembers
    });
};

module.exports = quizPage2 = function (req, res) {
    res.render('quizPage2.ejs', {
        title: "this is a quiz page",
        groupMembers: db.groupMembers
    });
};

module.exports = quizPage3 = function (req, res) {
    res.render('quizPage3.ejs', {
        title: "this is a quiz page",
        groupMembers: db.groupMembers
    });
};

module.exports = quizWin = function (req, res) {
    res.render('quizWin.ejs', {
        title: "this is a quiz page",
        groupMembers: db.groupMembers

    });
};

module.exports = diyHome = function (req, res) {
    res.render('diyHome.ejs', {

    });
};

module.exports=loginPage=function(req,res){
    res.render('login.ejs',{

    });
};

module.exports = diyTemplete = function (req, res) {
    res.render('diyTemplete.ejs', {
    });
};

module.exports=signupPage=function(req,res){
    res.render('signup.ejs',{

    });
};

module.exports=evaluation=function(req,res){
    res.render('evaluation.ejs',{

    });
};

// user api
var mongoose = require('mongoose');
var User = mongoose.model('user');
var createUser = function(req,res){
    var user = new User({
        "email": req.body.name,
        "password": req.body.password
    });
    user.save(function(err, newUser){
        if(!err){
            res.send(newUser);
        }else{
            res.sendStatus(400);
        }
    });
};

var findUser = function(req, res) {
    var userEmail = req.params.email;
    var userPassword = req.params.password;

    User.find(function(err, user){
        if(!err){
            res.send(user);
        }else{
            res.sendStatus(404);
        }
    })
}