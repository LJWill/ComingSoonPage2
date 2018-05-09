const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const session = require('express-session');
var cookieParser = require('cookie-parser');
const passport = require('passport');
const flash = require('connect-flash');

const router = require('./routers/router');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs');

app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'amazing',
    resave: true,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(express.static(__dirname +'/public'));
module.exports = passport;

app.use(router);

app.use(function(req, res, next){
    res.status(404);
    if (req.accepts('html')) {
        res.render('404_error_template', { url: req.url });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){ });
console.log('Express listening on port ' + PORT);