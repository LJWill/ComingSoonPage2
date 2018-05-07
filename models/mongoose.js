//create database
var mongoose = require('mongoose');
mongoose.connect('mongodb://zichunz:Reporkey1996@ds161041.mlab.com:61041/mydb', function(err){
    if(!err){
        console.log('Connected to mongo');
    }else{
        console.log('Failed to connect to mongo');
    }
});

require('./user.js');
require('./quiz.js');
require('./evalshoes.js');
require('./diyshoes.js');
