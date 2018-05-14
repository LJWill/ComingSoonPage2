var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    "question": String,
    "option": [
        String,
        String,
        String,
        String
    ],
    "correctIndex": Number
});

module.exports = mongoose.model('Quizzes', userSchema);