var mongoose = require('mongoose');
var evalshoesSchema = new mongoose.Schema(
    {
        "user": String,
        "time": Date,
        "image": String,
        "rating": Number,
        "coupon": String
    }
);
mongoose.model('evalshoes', evalshoesSchema);