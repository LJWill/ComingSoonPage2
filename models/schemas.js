// const mongoose = require('mongoose');
// //
// // // users
// // const userSchema = mongoose.Schema({
// //     "email": {type: String, required: true, validate: [validators.notEmpty, 'Name is empty']},
// //     "password": {type: String, required: true, validate: [validators.notEmpty, 'Name is empty']},
// // });
// // module.exports.User = mongoose.model('users', userSchema);
//
// // quizzes
// const quizSchema = mongoose.Schema({
//         "question": String,
//         "options": {
//             "a": String,
//             "b": String,
//             "c": String,
//             "d": String },
//         "answer": String
//     }
// );
// module.exports.Quiz = mongoose.model('quizzes', quizSchema);
//
// // eval shoes
// const evalshoesSchema = mongoose.Schema({
//         "email": String,
//         "time": Date,
//         "image": String,
//         "rating": Number,
//         "coupen": String
//     }
// );
// module.exports.Evalshoes = mongoose.model('eval shoes', evalshoesSchema);
//
// // diy shoes
// const diyshoesSchema = mongoose.Schema({
//         "name": String,
//         "part": String,
//         "color": String,
//         "image": String
//     }
// );
// module.exports.Diyshoes = mongoose.model('diy shoes', diyshoesSchema);