var express = require('express');
var app = express();
var path = require('path');

var users = require('./models/db.js');
var routes = require('./routes/index');

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/hello', (req, res) => res.send('Hello World!!!'));
app.get('/users', (req, res) => res.send(users));
app.get('/bye', (req, res) => res.send("Good Night!"));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

var server = app.listen(8088, function () {
    var host = server.address().address;
    var port = server.address().port;
})