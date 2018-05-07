var mongoose = require('mongoose');
var evalshoesSchema = mongoose.Schema(
    {
        "user": String,
        "time": Date,
        "image": String,
        "rating": Number,
        "coupon": String
    }
);
mongoose.model('evalshoes', evalshoesSchema);