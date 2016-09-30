var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var counter=0;
app.get('/counter', function(req,res){
 counter=counter+1;
res.send(counter.toString());
});

var names=[];
app.get('/submit-name', function(req,res){    // using url ?name=name method
 var name =req.query.name;

 names.push(name);
 res.send(JSON.stringify(names));
});

var comment='';
app.get('/submit-comment/:comment', function(req,res){    // using url ?name=name method
 comment =req.query.comment;
 res.send(comment);
});

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

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
app.get('/ui/sekar.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sekar.jpg'));
});
app.get('/ui/facebook.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'facebook.png'));
});
app.get('/ui/twitter.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'twitter.png'));
});
app.get('/ui/gmail.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gmail.png'));
});

app.get('/ui/youtube.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'youtube.png'));
});
app.get('/ui/git.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'git.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
