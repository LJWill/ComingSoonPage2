var mongoose = require('mongoose');

var imageSchema = mongoose.Schema({
    part: String,
    name: String,
    img: {
        data: Buffer,
        contentType: String,
    }
});

module.exports = mongoose.model('Images', imageSchema);