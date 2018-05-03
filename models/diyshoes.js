var mongoose = require('mongoose');
var diyshoesSchema = mongoose.Schema(
    {
        "name": String,
        "part": String,
        "color": String,
        "image": String
    }
);
mongoose.model('diyshoes', diyshoesSchema);