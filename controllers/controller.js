var db = require('../models/db.js');

// Display Coming soon at home page
module.exports = controller = function(req, res) {
    res.render('homePage.ejs', {
        coming: db.comingSoon
    });
};
