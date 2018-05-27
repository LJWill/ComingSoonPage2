var mongoose = require('mongoose');

var quizSchema = mongoose.Schema({
    "email": String,
    "user": String,
    "correctness": Number
});

module.exports = mongoose.model('Ranks', quizSchema);