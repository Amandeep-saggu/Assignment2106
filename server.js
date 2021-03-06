// server.js
// load the things we need
var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));


// use res.render to load up an ejs view file
// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
     
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// Portfolio page 
app.get('/services', function(req, res) {
    res.render('pages/portfolio');
});

// Portfolio page 
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

// Portfolio page 
app.get('/projects', function(req, res) {
    res.render('pages/projects');
});

// Portfolio page 
app.get('/onepage', function(req, res) {
    res.render('pages/onepage');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});