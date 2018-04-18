const express = require('express');
const PORT = process.env.PORT || 3000;

var app = express();
var path = require('path');

var users = require('./models/db.js');
const router = require('./routes/router.js');
// var routes = require('./routes/index');

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname +'/public'));

app.get('/hello', (req, res) => res.send('Hello World!!!'));
app.get('/users', (req, res) => res.send(users));
app.get('/bye', (req, res) => res.send("Good Night!"));


//add 404 not found page
app.use(function(req, res, next){
    res.status(404).render('404_error_template', {title: "Sorry, page not found"});
    // respond with html page
    if (req.accepts('html')) {
        res.render('404', { url: req.url });
        return;
    }
    // respond with json
    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
}
});

// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', router);
app.use('/', (req, res) => res.render('index', {title: 'coming soon'}));


app.listen(PORT, function(){ console.log(`Express listening on port ${PORT}`); });
