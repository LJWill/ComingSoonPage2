const express = require('express');
var app = express();
const router = require('./routers/router.js');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log('Express serving at port ${PORT}');
});