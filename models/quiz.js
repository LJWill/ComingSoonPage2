var mongoose = require('mongoose');
var quizSchema = mongoose.Schema(
    {
        question: String,
        options: {
            a: String,
            b: String,
            c: String,
            d: String
        },
        answer: String
    }
);
mongoose.model('quiz', quizSchema);