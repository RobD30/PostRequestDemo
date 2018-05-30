var express = require("express");
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home');
})

app.get('/holley', function(req, res){
    res.render('holley');
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server started...');
})