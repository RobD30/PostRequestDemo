var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

const friends = ['Krazy', 'Amanda', 'Avery', 'Marshall', 'Dimitar', 'Charmander'];

app.get('/', function(req, res){
    res.render('home');
})

app.post('/addfriend',function(req, res){
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect('/friends');
})

app.get('/friends', function(req, res){
    res.render('friends', {friends: friends});
})

app.get('/holley', function(req, res){
    res.render('holley');
    console.log('Someone looked at Holley\'s page');
})

app.get('/amanda', function(req, res){
    res.render('amanda');
    console.log('Someone looked at Amanada\'s page');
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server started...');
})