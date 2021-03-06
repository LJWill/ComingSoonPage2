var router = require('express').Router();
var passport = require('../app').passport;
var controller = require('../controllers/controller');

router.get("/", function (req, res) {
    res.redirect('/index');
});
router.get('/index', controller.indexPage);
router.get('/quiz', controller.quizPage);
router.get('/diy', controller.diy);
router.get('/evaluation', controller.evaluation);

// user api
router.get('/signup', controller.signupPage);
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/index', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));


// log in
router.get('/login', controller.loginPage);
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/index', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));

// log out
router.get('/logout', controller.isLoggedIn, controller.logout);

// temp
// router.get('/insert', controller.insertQuizzes);

module.exports = router;

