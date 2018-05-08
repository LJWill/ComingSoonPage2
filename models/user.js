var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    email: String,
    password: String
});

mongoose.model('Users', userSchema);
console.log(Object.getOwnPropertyNames(mongoose).filter(function (p) {
    return typeof mongoose[p] === 'function';
}));