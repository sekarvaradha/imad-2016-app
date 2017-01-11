var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pg =require('pg');
var app = express();
var crypto=require('crypto');
//var mailer =require('nodemailer');

var bodyParser= require('body-parser');
app.use(morgan('combined'));
app.use(bodyParser.json());

var config ={
    user:"sekarvaradha",
    database:"sekarvaradha",
    host: "db.imad.hasura-app.io",
    port:"5432",
    password: process.env.DB_PASSWORD
};

var pool = new pg.Pool(config);

app.get("/test-db", function (req,res){
    // make a select request
    // return a response with the result
    
    pool.query("SELECT * FROM article",function (err, result){
       if (err){
           res.status(500).send (err.toString());
          } else {
              res.send(JSON.stringify(result.rows));
          }
          
      });
});

app.get("/sendmail", function (req,res){
 var html = '<form action="/mail" method="post">' +
        'Enter Email id:' +
        '<input type="text" name="userEmail"placeholder="Email" />' +
        '<br>' +
        '<button type="submit">Submit</button>' +
        '</form>';

    res.send(html);
});
   
app.post('/mail', function(req, res) {
    var userEmail = req.body.userEmail;

    var smtpTransport= mailer.createTransport("SMTP",{
	host: 'smtp.gmail.com',
	  //host:'http://sekarvaradha.imad.hasura-app.io/',
        secureConnection: false,
       // port: 587,
	service :"Gmail",
   auth: {
	user:"segarvaradha@gmail.com",
	pass:"gmail_password"
      }  

   });
 
var mail ={

	from: "SEGAR V <segarvaradha@gmail.com>",
	to: "ghsdharmapuri@gmail.com",
	
	subject: 'Message From ' + userEmail,    // Subject line
        text: 'Hi....' + userEmail      // plaintext body
       }

smtpTransport.sendMail(mail, function(err,response){

	if (err){
		console.log(err);
	    }else{
		console.log('Message sent: ' + info.response);
       		 var html = 'Hello: ' + userEmail + '.<br>' +
           	 '<a href="/">Try again.</a>';
        	res.send(html);
	      }
      smtpTransport.close();

     });

});
    
    
    

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
    <div id="article_container" style="border:none;">
     
       <div>
        <div>
        
        <h2 style="color:navy;text-align:center;"> <b>${heading}</b> </h2>
        

        <a href="/list-article"  style="color:maroon;"> Home </a>
        <hr>
        </div>
        <div>
       

        <div style="text-align:right">
        ${date.toDateString()}
        </div>
        <hr>
        <div id="content">
        ${content}
        </div>
        
        <hr/>
        <div>
        Comments :
        <textarea  rows="4" cols="40"  id="comment-article" style="border:1px groov blue;"> </textarea><br>
        <input type="submit" id ="comment-submit" value="Submit Comment" style="width:220px;height:30px;background:maroon;color:white;margin-left:120px;"><br><br>
        <ul id="display-comment">     
        
        </ul>
         </div>
            <script type="text/javascript" src="/ui/main.js"></script>
            
        </html>`;
return HTMLTemplate;
} 


/*app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'load.html'));
});
*/


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'welcome.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
   counter = counter + 1;
   res.send(counter.toString());
}); 


 app.get('/profile', function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
   });
  
app.get('/welcome', function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'welcome.html'));
});

   
app.get('/Articles/:articleName', function(req,res){
//var articleName=req.params.articleName;
pool.query("SELECT * FROM article WHERE title='"+req.params.articleName +"'", function(err,result){
    if(err){
        res.status(500).send(error.toString());
        } 
    else {
          if (result.rows.length===0)
              { res.status(404).send ('Article not found');
                } 
           else {
                 var articleData=result.rows[0];
                 res.send(createTemplate(articleData));
                }
        }
    
    });

//res.send(createTemplate(articles[articleName]));
});


app.post('/submit-comment/:articleName', function (req, res) {
  
 // Check if the user is logged in
    
if (req.session && req.session.auth && req.session.auth.userId) 
{
        
// First check if the article exists and get the article-id
        
pool.query('SELECT * from article where title = $1', [req.params.articleName], function (err, result) {
           
	 if (err) {
               
	 	res.status(500).send(err.toString());
           
 	                } 
	else {
               
	             if (result.rows.length === 0) 
		{
                    
	                    res.status(400).send('Article not found');
                
	                 } 
	      else {
                    
	var articleId = result.rows[0].id;
                    
  	 // Now insert the right comment for this article
                   
 	pool.query(
"INSERT INTO comment (article_id, user_id,comment) VALUES ($1, $2, $3)",
  [articleId, req.session.auth.userId,req.body.comment],
  function (err, result) {

                            
	      if (err) {
                    res.status(500).send(err.toString());
                           
	       } else {
                                
		res.status(200).send('Comment inserted!')
                  }
        });
    }
   }
}); 
} else {
      res.status(403).send('Only logged in users can comment');
    }
});


              
app.post('/save-article', function(req,res){
var title=req.body.title;
var tdate=req.body.date;
var heading =req.body.heading;
var content= req.body.content;

 pool.query('INSERT INTO article (title,content,date,heading) VALUES ($1,$2,$3,$4)',[title,content,tdate,heading], function(err,result){
    if (err) {
              res.status(500).send(err.toString());
            } 
     else {
                 res.status(200).send('Article saved!')
      }
});
      
});


// hash function
function hash(input,salt){
  //how do we create a hash?
  var hashed=crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
 return ['pbkdf2','10000',salt,hashed.toString('hex')].join('$');
 
}

app.get('/hash/:input', function(req,res){
    var hashedstring= hash(req.params.input,"this is some random string");
    res.send(hashedstring);
});

// login endpoint
app.post('/login', function (req,res) {
var username = req.body.username;   
var password = req.body.password;

pool.query('SELECT * FROM login WHERE username=$1',[username], function(err,result){
    if (err) {
        res.status(500).send(err.toString());
   } else {
          	if(result.rows.length===0) {
		                   res.send(403).send("username /password is invalid");
	                } else {

	          // match password
	                 	var dbString=result.rows[0].password;
	        	        var salt =dbString.split('$')[2];
		                var hashedpassword= hash(password,salt);

	                  if (hashedpassword===dbString) {
	        
		                    res.send('Credentials correct');
	                      }
	                     else {
	        	            res.send(403).send("username /password is invalid");
	                    	}
	                   }	
        }
});

});


app.post('/register', function(req,res){
//username, password
var fname=req.body.fname;
var lname=req.body.lname;
var email =req.body.email;
var username= req.body.username;
var password= req.body.password;

var salt=crypto.randomBytes(128).toString('hex');
var dbString= hash(password,salt);
pool.query('SELECT * FROM register WHERE email=$1', [email], function(err,result){

  if (err) {
	res.status(500).send(err.toString());
               } 
    else  if (result.rows.length!=0) {
                                res.status(404).send ('This email is already Registered');
        }  else {
pool.query('INSERT INTO register (fname, lname,email,username,password) VALUES ($1,$2,$3,$4,$5)',[fname,lname,email,username,dbString], function(err,result){
    if (err) {
              res.status(500).send(err.toString());
            } 
   else {
             pool.query('INSERT INTO login (username,password) VALUES ($1,$2)', [username,password], function(err,result){
	if(err){
	      res.status(500).send(err.toString());
                       }
	 else{
    res.send('User successfully Registered : ' +username);
         }
     });
       }
    
});
 
}

});

});

app.get('/check-login', function (req, res) {
  
 if (req.session && req.session.auth && req.session.auth.userId) {
       
// Load the user object
       
pool.query('SELECT * FROM login WHERE id = $1', [req.session.auth.userId], function (err, result) {
          
         if (err) {
             
	 res.status(500).send(err.toString());
          
           } else {
              
	 res.send(JSON.stringify(result.rows));
  
                  
              }
      
    });
  
     } else {
       
	res.status(400).send('You are not logged in');
   
 }

});


app.get('/logout', function (req, res) {
   
delete req.session.auth;
   
console.log("logged out");
res.send('<script>window.location.href="/" </script>');
//res.send('<html><body>Logged out!<br/><br/><a href="/">Back to home</a></body></html>');

});

app.get('/list-article', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'list-artilce.html'));
});

app.get('/new-article', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'New-Article.html'));
});


app.get('/register', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Register.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/mail',function(req,res){
res.sendFile(path.join(_dirname,'ui','mail.html'));    
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
