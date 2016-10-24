var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

var articles = {
 'article-one' :{
  title:'Article 1 ! SEGAR',
  heading:'Article-one',
  date:'september,5 2016',
  content:`
        <p> This is my first article. This is my first article.This is my first article This is my first article.This is my first article.This is my first articleThis is my first article.
         </p>
          
        <p> This is my first article. This is my first article.This is my first article This is my first article.This is my first article.This is my first articleThis is my first article.
         </p>
          
         <p> This is my first article. This is my first article.This is my first article This is my first article.This is my first article.This is my first articleThis is my first article.
         </p>`
},
 'article-two' :{
  title:'Article 2 ! SEGAR',
  heading:'Article-two',
  date:'september,10 2016',
  content:`
  <p> This is my second article. This is my second article.
  </p>`
          
        
},
 'article-three' :{
    title:'Article 3 ! SEGAR',
    heading:'Article-three',
    date:'september,16 2016',
    content:`
    <p> This is my third article. 
    </p>`
     }
};

function createTemplate (data) {
     var title= data.title;
     var date=data.date;
     var heading=data.heading;
     var content=data.content;
     
var HTMLTemplate =`
    <html>
    <head>
    <title>
       ${title}
      </title>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
      
    </head>
    
    <body>
        <div class="container" style="border:none;">
     
       <div>
        <div>
        
        <h2 style="color:navy;text-align:center;"> <b>${heading}</b> </h2>
        <a href="/"> Home </a>
        <hr>
        </div>
        <div>
        ${date}
        </div>
        <hr>
        <div>
        ${content}
        </div>
        
        <hr/>
        <div>
        Your Comments here :<input type="text" name="comment" id="comment"> 
        <input type="submit" id ="comment-btn" value="Submit"><br><br>
        <ul id="show-comment" style="background-color:lightyellow;">     
        
        </ul>
         <br>
         <br> 
        </div>
        <script src="ui/main.js"></script>
        </html>`;
return HTMLTemplate;
} 

/*app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'load.html'));
});
*/

app.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
   counter = counter + 1;
   res.send(counter.toString());
}); 

var names = [];
app.get('/submit-name', function(req, res) { // /submit-name?name=xxxx
  // Get the name from the request
var name = req.query.name;
names.push(name);
// JSON: Javascript Object Notation
res.send(JSON.stringify(names));
}); 

var comments=[];
app.get('/submit-comment',function(req,res){
//to get the comments
var comment=req.query.comment;
comments.push(comment);
//console.log('comments is: ',comment);
 res.send(JSON.stringify(comments));

//to render those comments on the page
});

 
 app.get('/profile', function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
   });
   
app.get('/home', function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'home.html'));
});

app.get('/email', function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'mail.html'));
});
  
app.get('/ui/mail', function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'mail.js'));
});
   
app.get('/test.php', function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'test.php'));
});
   

app.get('/part3', function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/:articleName', function (req, res){
var articleName=req.params.articleName;
res.send(createTemplate(articles[articleName]));
}); 
   
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/sekar.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sekar.jpg'));
});

app.get('/ui/gmail.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gmail.png'));
});
app.get('/ui/git.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'git.png'));
});
app.get('/ui/youtube.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'youtube.png'));
});

app.get('/ui/facebook.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'facebook.png'));
});
app.get('/ui/twitter.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'twitter.png'));
});

app.get('/ui/profile', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
