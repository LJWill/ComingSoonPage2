var db = require('../models/db.js');    // whatever you exported in db.js (in module.exports)

module.exports = indexPage = function (req, res) {
    res.render('index.ejs', {

    });
};

module.exports=loginPage=function(req,res){
    res.render('login.ejs',{

    });
};

module.exports=signupPage=function(req,res){
    res.render('signup.ejs',{

    });
};