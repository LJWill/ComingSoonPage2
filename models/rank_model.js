var mongoose = require('mongoose');

var rankSchema = mongoose.Schema({
    "email": String,
    "user": String,
    "correctness": Number
});

module.exports = mongoose.model('Ranks', rankSchema);