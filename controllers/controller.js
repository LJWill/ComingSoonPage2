var db = require('../models/db.js');    // whatever you exported in db.js (in module.exports)
module.exports = {
    indexPage: function (req, res) {
        res.render('index.ejs', {
        });
    },
    diyHome: function (req, res) {
        res.render('diyHome.ejs', {

        });
    },
    quizPage: function (req, res) {
        res.render('quizPage.ejs', {
            title: "this is a quiz page",
            groupMembers: db.groupMembers
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
    evaluation: function(req,res){
        res.render('evaluation.ejs',{

        });
    },

    /* user api */

    // sign up
    signupPage: function(req,res){
        res.render('signup.ejs',{
            message: req.flash('signupMessage')
        });
    },
    createUser: function(req, res) {
        res.locals.passport.authenticate('local-signup', {
            successRedirect : '/', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        });
    },

    // log in
    loginPage: function(req,res){
        console.log(req.flash('loginMessage'));
        res.render('login.ejs',{
            message: req.flash('loginMessage'),
        });
    },
    // verifyUser: function(req, res) {
    //     res.locals.passport.authenticate('local-login', {
    //         successRedirect : '/', // redirect to the secure profile section
    //         failureRedirect : '/login', // redirect back to the login page if there is an error
    //         failureFlash : true // allow flash messages
    //     }, res.redirect("/login"));
    // },
    // verifyUser: function(req, res, next) {
    //     res.locals.passport.authenticate('local-login', function(err, user, info){
    //         if (err){
    //             return next(err);
    //         }
    //         if (!user){
    //             return res.redirect('/login');
    //         }
    //         req.logIn(user, function (err) {
    //             if(err){
    //                 return next(err);
    //             }
    //             return res.send(user);
    //         });
    //     }, res.redirect("/login"));
    // },
    isLoggedIn: function(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/');
    },
};

// app.get('/connect/local', function(req, res) {
//     res.render('connect-local.ejs', { message: req.flash('loginMessage') });
// });
// app.post('/connect/local', passport.authenticate('local-signup', {
//     successRedirect : '/profile', // redirect to the secure profile section
//     failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
//     failureFlash : true // allow flash messages
// }));