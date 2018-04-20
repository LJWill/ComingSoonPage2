var db = require('../models/db.js');    // whatever you exported in db.js (in module.exports)

module.exports = indexPage = function (req, res) {
    res.render('index.ejs', {

        title: db.comingSoon,
        groupMembers : db.groupMembers
    });
};

<<<<<<< HEAD
=======
module.exports = diyHome = function (req, res) {
    res.render('diyHome.ejs', {

    });
};

module.exports = diyTemplete = function (req, res) {
    res.render('diyTemplete.ejs', {
      });
};

>>>>>>> 024d2ce1983f8d43603742a07abb4327fc6b0fad

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
<<<<<<< HEAD
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

=======
>>>>>>> 024d2ce1983f8d43603742a07abb4327fc6b0fad
    });
};