//create database
const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:123@ds161041.mlab.com:61041/mydb', function(err){
    if(!err){
        console.log('Connected to mongo');
    }else{
        console.log('Failed to connect to mongo');
    }
});

module.exports = require('./schemas.js');