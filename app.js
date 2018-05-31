var express = require("express");
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home');
})

app.get('/friends', function(req, res){
    res.render('friends');
})

app.get('/holley', function(req, res){
    res.render('holley');
    console.log('Someone looked at Holley\'s page')
})

app.get('/amanda', function(req, res){
    res.render('amanda')
    console.log('Someone looked at Amanada\'s page')
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server started...');
})