const express = require('express');
var users = require('../models/db.js');


module.exports = controller = function(req, res) {
    res.render('homepage.ejs', {
        title: 'coming soon'
    })
};