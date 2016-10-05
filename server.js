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
        <h2 style="color:navy;text-align:center;"> <b>${heading}</b> </h2>
        </div>
        <div>
        ${date}
        </div>
        <hr>
        <div>
        ${content}
        </div>
</html>`;
return HTMLTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/articleName', function (req, res){
    var articleName=req.params.articleName;
 res.send(createTemplate(articles(articleName)));
   });
   

   
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
