const PORT = process.env.PORT || 3000;

const express = require('express');
var app = express();
const router = require('./routers/router.js');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/', router);

app.listen(PORT, function(){
    console.log('Express serving at port ${PORT}');
});