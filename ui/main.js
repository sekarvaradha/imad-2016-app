// counter code

var button=document.getElementById("counter");
if (button != undefined) {
button.onclick = function(){
var request = new XMLHttpRequest();
    //create a request
 request.onreadystatechange= function(){
 if (request.readyState === XMLHttpRequest.DONE)
  {
      // take some action
    if (request.status===200)
       { 
          
        var counter=request.responseText;
        var span=document.getElementById("count");
        span.innerHTML=counter.toString();
       }
  }
};
   // make the request
    request.open('GET', 'http://sekarvaradha.imad.hasura-app.io/counter', true);
    // request.open('GET', 'http://localhost:8080/counter', true);
     request.send(null);
}; 
}


// Registration

var Reg=document.getElementById("Reg-submit");
if (Reg != undefined) {
Reg.onclick = function(){

var pass=document.getElementById('password').value;
var cpass=document.getElementById('cpassword').value;

 if (pass.toString()=== cpass.toString())
 {

var request = new XMLHttpRequest();
 
    //create a request
 request.onreadystatechange= function(){
 if (request.readyState === XMLHttpRequest.DONE)
  {
      // take some action
      
  	  if (request.status===200)
       	   { 
        	   
	     alert(" successfully Registered:");
	    //window.location.href = "/";
       
                       } 
                 else if (request.status===403)
	       {
	            alert ("userid/password is not correct");
                            } 
                 else if (request.status===500) 
	       {
	          alert ("something went wrong on the server");
                         }
	else
                    {
	       alert ("This Email already been registered");
	   }
        }
  };


   // make the request

   var fname=document.getElementById('fname').value;
   var lname=document.getElementById('lname').value;
   var email=document.getElementById('email').value;
   var username=document.getElementById('username').value;
   var password=document.getElementById('password').value;
     
  alert(username);
  console.log(username);
  console.log(password);
  console.log(email);

request.open('POST', '/register ', true);
request.setRequestHeader('Content-Type','application/json');
request.send(JSON.stringify({fname: fname, lname: lname, email: email, username: username, password: password})); 

}
else
 {
    alert("PASSWORD & CONFIRM PASSWORD NOT MATCHING");
    }
}; 
}


// reset the text values

var reset=document.getElementById('reset-login');
 if (reset !=undefined){
 reset.onclick=function(){
 user=document.getElementById('username');
  user.value="";
 document.getElementById('password').value="";
 user.focus();

  };
}


var reset=document.getElementById('reg-reset');
if (reset != undefined) {
   reset.onclick=function(){
   document.getElementById('fname').value="";
   document.getElementById('lname').value="";
   document.getElementById('email').value="";
   document.getElementById('username').value="";
   document.getElementById('password').value="";
   document.getElementById('cpassword').value="";
   document.getElementById('fname').focus(); 
   
    }
}

// LOGIN  BLOCK

var login=document.getElementById("submit-login");
var username=document.getElementById('username');
if (login != undefined) {
login.onclick = function(){
var request = new XMLHttpRequest();

    //create a request
 request.onreadystatechange= function(){
 if (request.readyState === XMLHttpRequest.DONE)
  {
      // take some action

    if (request.status===200)
       { 
        	console.log("user loggedin");
	//alert("user successfully loggedin");
	window.location.href = "/index?abcxywd=" +username;
       
           } else if (request.status===403){
	 alert ("userid/password is not correct");
            } else if (request.status===500) {
	alert ("something went wrong on the server");
                 }
	
        }
  };


   // make the request

var username=document.getElementById('username').value;
var password=document.getElementById('password').value;
console.log(username);
console.log(password);

request.open('POST', '/login', true);
request.setRequestHeader('Content-Type','application/json');
request.send(JSON.stringify({username: username, password: password})); 
}; 
}


//Submit Comment


var commentsub=document.getElementById("comment-submit");
if (commentsub != undefined) {
commentsub.onclick = function(){

var request = new XMLHttpRequest();

    //create a request
 request.onreadystatechange= function(){
 if (request.readyState === XMLHttpRequest.DONE)
  {
      // take some action
      alert(" insert");

    if (request.status===200)
       { 
         alert("comment is saved");
        
       
         } 
      else if (request.status===403)
          {
	 alert ("Comment not saved");
            } 
       else if (request.status===500) 
            {
                alert ("something went wrong on the server");
               }
	
       }
  };


var comment=document.getElementById("comment-article").value;
 alert (comment);
// get current Article Title 
var articleName = window.location.pathname.split('/')[2];

console.log(articleName);

   // make the request


request.open('POST' , '/submit-comment/' + articleName, true);
    

// request.open('POST' , '/submit-comment',true); 
 request.setRequestHeader('Content-Type', 'application/json');
        
//request.send(JSON.stringify({articleName: articleName, comment: comment})); 
request.send(JSON.stringify({comment:comment}));  
    
   
//request.send(null);     
}; 
}

// ####### List Articles ################


var submit_btn=document.getElementById("article-list-button");
if (submit_btn!= undefined) {
submit_btn.onclick = function(){

var request = new XMLHttpRequest();
    //create a request
 request.onreadystatechange= function(){
 if (request.readyState === XMLHttpRequest.DONE)
  {
      // take some action
    if (request.status===200)
        { 
        var Records = JSON.parse(this.responseText);
  
       
        // alert(Records.length);   
          
   
        var artlist='<tr> <th width=50%> heading</th><th>date </th></tr>';
        for (var i=Records.length-1;i>=0;i--)
              {
     
	artlist += `<td><a href="/Articles/${Records[i].title}">${Records[i].heading} </a></td>
	        <td>(${Records[i].date.split('T')[0]})</td></tr>`;

           var p =document.getElementById("show-article");
           p.innerHTML= artlist;
      
            
          }
        }
  }
};

   // make the request
  
   request.open('GET', '/get-articles' , true);
   request.send(null); 
}; 
}

// SAVE NEW  ARTICLE

var NewArt=document.getElementById("article-submit");
if (NewArt != undefined) {
NewArt.onclick = function(){
alert("ok");
var date1=new Date();
var tdate=date1.toDateString();
  alert(tdate);
var request = new XMLHttpRequest();
 
    //create a request
 request.onreadystatechange= function(){
 if (request.readyState === XMLHttpRequest.DONE)
  {
      // take some action
      
  	  if (request.status===200)
       	   { 
        	   alert(" Article successfully Saved:");
                       } 
                 else if (request.status===403)
	       {
	            alert ("Article is not saved");
                            } 
                 else if (request.status===500) 
	       {
	          alert ("something went wrong on the server");
                         }
	
        }

};

   // make the request

  var title=document.getElementById('title').value;
  var heading=document.getElementById('heading').value;
  var content=document.getElementById('content').value;
  
 alert(title);
request.open('POST', '/save-article', true);
request.setRequestHeader('Content-Type','application/json');
request.send(JSON.stringify({title:title,content:content,date:tdate, heading:heading})); 

}; 
} 