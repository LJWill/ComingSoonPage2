const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routers/router');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.use(router);
app.use(express.static(__dirname +'/public'));

app.use(function(req, res, next){
    res.status(404);
    // respond with html page
    if (req.accepts('html')) {
        res.render('404_error_template', { url: req.url });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){ });
console.log(`Express listening on port ${PORT}`);
