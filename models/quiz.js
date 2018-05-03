var mongoose = require('mongoose');
var quizSchema = mongoose.Schema(
    {
        "question": String,
        "answer": String
    }
);
mongoose.model('quiz', quizSchema);