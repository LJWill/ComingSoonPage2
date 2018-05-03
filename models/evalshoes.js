var mongoose = require('mongoose');
var evalshoesSchema = mongoose.Schema(
    {
        "user": String,
        "time": String,
        "image": String,
        "rating": String,
        "coupon": String
    }
);
mongoose.model('evalshoes', evalshoesSchema);