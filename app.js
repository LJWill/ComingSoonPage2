const express = require('express');
const app = express();

const router = require('./routers/router');

app.set('view engine', 'ejs');
app.use(router);
app.use(express.static(__dirname +'/public'));

app.use(function(req, res, next){
    res.status(404);
    // respond with html page
    if (req.accepts('html')) {
        res.render('404_error_template', { url: req.url });

    // respond with json
    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }
    // default to plain-text. send()
    res.type('txt').send('Not found');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){ });
console.log(`Express listening on port ${PORT}`);
