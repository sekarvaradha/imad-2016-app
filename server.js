var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});




app.get('/article-one', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
   });
   
app.get('/article-two', function (req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
   });
   
app.get('/article-three', function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
   });
   
app.get('/home', function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'home.html'));
   });
   
   app.get('/profile', function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
   });
   
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1.png'));
});

app.get('/ui/banner2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'banner2.jpg'));
  
});
app.get('/ui/banner3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'banner3.jpg'));
});
app.get('/ui/phot.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'phot.jpg'));
});
app.get('/ui/f1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'f1.png'));
});
app.get('/ui/t2.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 't2.png'));
});
app.get('/ui/gmail.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gmail.png'));
});

app.get('/ui/utube.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'utube.jpg'));
});
app.get('/ui/git.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'git.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
