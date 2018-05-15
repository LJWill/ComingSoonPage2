var mongoose = require('mongoose');

var quizSchema = mongoose.Schema({
    "question": String,
    "options": [
        String,
        String,
        String,
        String
    ],
    "answer": Number
});

module.exports = mongoose.model('Quizzes', quizSchema);