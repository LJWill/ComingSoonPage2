

// router.get(function (req, res, next) {
//     passport = res.locals.passport;
//     next();
// });
// router.post(function (req, res, next) {
//     passport = res.locals.passport;
//     next();
// });
// router.get('/quiz', controller.quizPage);
// router.get('/quiz2', controller.quizPage2);
// router.get('/quiz3', controller.quizPage3);
// router.get('/quizWin', controller.quizWin);
// router.get('/diyHome', controller.diyHome);
// router.get('/index', controller.indexPage);
// router.get('/evaluation', controller.evaluation);

// user api
// router.get('/signup', controller.signupPage);
// router.post('/signup', controller.createUser);

module.exports = function(app, passport) {

    app.get('/login', function(req,res){
        console.log(req.flash('loginMessage'));
        res.render('login.ejs',{
            message: req.flash('loginMessage'),
        });
    });
    // router.post('/login', controller.verifyUser);
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/index', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
}

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
