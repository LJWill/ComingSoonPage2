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

/* user api */

var mongoose = require("../models/mongoose.js");
var User = require('../models/user_model.js');

// sign up
module.exports.createUser = function(req,res){
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });
    console.log(user);
    user.save(function(err, save){
        console.log(save);
        if(!err){
            res.send(save);
        }else{
            res.sendStatus(400);
        }
    });
};

// log in
module.exports.verifyUser = function(req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });
    user.comparePassword(user.username, function(err, isMatch){
        if(!err){
            res.send("log in");
        }else{
            res.sendStatus(400);
        }
    });
};