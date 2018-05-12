var db = require('../models/db.js');    // whatever you exported in db.js (in module.exports)

// module.exports = indexPage = function (req, res) {
//     res.render('index.ejs', {
//     });
// };
module.exports=loginPage=function(req,res){
    res.render('login.ejs',{

    });
};

module.exports=signupPage=function(req,res){
    res.render('signup.ejs',{

    });
};

module.exports = diy = function (req, res) {
    res.render('diy.ejs', {
    });
};

module.exports = quizPage = function (req, res) {
    res.render('quizPage.ejs', {
    });
};

module.exports = quizPage2 = function (req, res) {
    res.render('quizPage2.ejs', {
    });
};

module.exports = quizPage3 = function (req, res) {
    res.render('quizPage3.ejs', {
    });
};

module.exports = quizWin = function (req, res) {
    res.render('quizWin.ejs', {
    });
};

module.exports=evaluation=function(req,res){
    res.render('evaluation.ejs',{

    });
};


module.exports = {
    index: (req, res) => {
        res.render("index.ejs")
    }
}