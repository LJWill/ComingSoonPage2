var db = require('../models/db.js');    // whatever you exported in db.js (in module.exports)

module.exports = indexPage = function (req, res) {
    res.render('index.ejs', {
        title: db.comingSoon,
        groupMembers : db.groupMembers
    });
};
