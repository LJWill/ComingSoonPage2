const express = require('express');
var app = express();
const router = require('./routers/router.js');

// set the view engine to ejs
app.set('view engine', 'ejs');



app.use('/', router);
app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
    console.log('Express serving at port 3000');
});