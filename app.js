var express  = require('express');
var app = express();
var router = express.Router();
var PORT = process.env.PORT || 3001;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session = require('express-session');


mongoose.connect('mongodb://admin:123@ds119490.mlab.com:19490/info30005');

require('./controllers/passport')(passport);

// require('./controllers/passport.js')(passport);
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// app.set('trust proxy', 1); // trust first proxy
app.use(session({
    secret: 'ilovescotchscotchyscotchscotch',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(express.static(__dirname +'/public'));

module.exports.passport = passport;
// require('./routers/router.js')(app, passport);
var router = require('./routers/router');
app.use(router);

app.use(function(req, res, next){
    res.status(404);
    if (req.accepts('html')) {
        res.render('404_error_template', { url: req.url });
    }
});

app.listen(PORT);
console.log('Express listening on port ' + PORT);

