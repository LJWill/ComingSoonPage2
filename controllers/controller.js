
var db = require('../models/db.js');

module.exports = indexPage = function (req, res) {
    res.render('index.ejs', {
        title: "COMING SOON"
    });
}