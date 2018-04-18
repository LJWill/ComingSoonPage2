var db = require('../models/db.js');    // whatever you exported in db.js (in module.exports)

module.exports = indexPage = function (req, res) {
    res.render('index.ejs', {
        title: db.comingSoon,
        groupMembers : db.groupMembers
    });
};


module.exports = quizPage = function (req, res) {
    res.render('quizPage.ejs', {
        title: "this is a quiz page",
        groupMembers: db.groupMembers
    });
};