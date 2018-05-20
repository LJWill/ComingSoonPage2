var quizfile = require('../models/quiz.js');
var Quiz = require('../models/quiz_module.js');
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
            tempquiz.answer = quizs[i].correctIndex;
            tempquiz.save(function(err, save){
                if (err) throw err;
            });
        }
        res.send("done");
    },

    // insertImage: function(req, res, next){
    //     var image = new Image;
    //
    //     var part = "outsoles";
    //     var name = "outsole3.png";
    //
    //     var imgPath = path.join(__dirname, '../public/'
    //         + "images/" + part + "/" + name);
    //     image.img.data = fs.readFileSync(imgPath);
    //     image.img.contentType = 'image/png';
    //     image.part = part;
    //     image.name = name;
    //     image.save(function(err,immage){
    //         if (err) throw err;
    //         console.log(part+"  /  "+name);
    //         Image.findById(image, function(err, doc){
    //             if (err) return next(err);
    //             res.contentType(doc.img.contentType);
    //             res.send(doc.img.data);
    //         });
    //     });
    // },
    // allImages: async function(req, res){
    //     var images = await getImages();
    //     res.render('diy_db.ejs', {
    //         user: req.user,
    //         images: images,
    //     });
    //
    // },

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

// async function getImages(){
//     var outsole1 = Image.findOne({'name': "outsole1.png"}).then(image => {console.log("outsole1.png"); return image});
//     var outsole2 = Image.findOne({'name': "outsole2.png"}).then(image => {console.log("outsole2.png"); return image});
//     var outsole3 = Image.findOne({'name': "outsole3.png"}).then(image => {console.log("outsole3.png"); return image});
//     var midsole1 = Image.findOne({'name': "midsole1.png"}).then(image => {console.log("midsole1.png"); return image});
//     var midsole2 = Image.findOne({'name': "midsole2.png"}).then(image => {console.log("midsole2.png"); return image});
//     var midsole3 = Image.findOne({'name': "midsole3.png"}).then(image => {console.log("midsole3.png"); return image});
//     var U1M1 = Image.findOne({'name': "U1M1.png"}).then(image => {console.log("U1M1.png"); return image});
//     var U1M2 = Image.findOne({'name': "U1M2.png"}).then(image => {console.log("U1M2.png"); return image});
//     var U1M3 = Image.findOne({'name': "U1M3.png"}).then(image => {console.log("U1M3.png"); return image});
//     var U2M1 = Image.findOne({'name': "U2M1.png"}).then(image => {console.log("U2M1.png"); return image});
//     var U2M2 = Image.findOne({'name': "U2M2.png"}).then(image => {console.log("U2M2.png"); return image});
//     var U2M3 = Image.findOne({'name': "U2M3.png"}).then(image => {console.log("U2M3.png"); return image});
//     var U3M1 = Image.findOne({'name': "U3M1.png"}).then(image => {console.log("U3M1.png"); return image});
//     var U3M2 = Image.findOne({'name': "U3M2.png"}).then(image => {console.log("U3M2.png"); return image});
//     var U3M3 = Image.findOne({'name': "U3M3.png"}).then(image => {console.log("U3M3.png"); return image});
//     var U4M1 = Image.findOne({'name': "U4M1.png"}).then(image => {console.log("U4M1.png"); return image});
//     var U4M2 = Image.findOne({'name': "U4M2.png"}).then(image => {console.log("U4M2.png"); return image});
//     var U4M3 = Image.findOne({'name': "U4M3.png"}).then(image => {console.log("U4M3.png"); return image});
//     var U5M1 = Image.findOne({'name': "U5M1.png"}).then(image => {console.log("U5M1.png"); return image});
//     var U5M2 = Image.findOne({'name': "U5M2.png"}).then(image => {console.log("U5M2.png"); return image});
//     var U5M3 = Image.findOne({'name': "U5M3.png"}).then(image => {console.log("U5M3.png"); return image});
//     return {
//         "outsoles": {
//             "outsole1": await outsole1, "outsole2": await outsole2, "outsole3": await outsole3,
//         },
//         "midsoles": {
//             "midsole1": await midsole1, "midsole2": await midsole2, "midsole3": await midsole3,
//         },
//         "combination": {
//         "U1M1": await U1M1, "U1M2": await U1M2, "U1M3": await U1M3,
//         "U2M1": await U2M1, "U2M2": await U2M2, "U2M3": await U2M3,
//         "U3M1": await U3M1, "U3M2": await U3M2, "U3M3": await U3M3,
//         "U4M1": await U4M1, "U4M2": await U4M2, "U4M3": await U4M3,
//         "U5M1": await U5M1, "U5M2": await U5M2, "U5M3": await U5M3,
//         }
//     }
// }