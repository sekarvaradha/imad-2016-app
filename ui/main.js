// counter code

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
           //alert("ok");
        var counter=request.responseText;
        var span=document.getElementById("count");
        span.innerHTML=counter.toString();
       }
  }
};
   // make the request
    request.open('GET', 'http://sekarvaradha.imad.hasura-app.io/counter', true);
     
     request.send(null);
}; 
}
// Name List Programme

var submit =document.getElementById('submit-btn');
if (submit != undefined) {
submit.onclick = function() {
  
  var request = new XMLHttpRequest();
// capture the response and store in a variable
  request.onreadystatechange = function() {
     if (request.readyState === XMLHttpRequest.DONE)
      {
        
      if (request.status===200)
       { 
           
	    var names=request.responseText;
	    names=JSON.parse(names);
	    var list='';
        for (var i=0;i<names.length;i++)
        {
          // list += '<li>' + names[i] + '</li>';
            list +=  names[i] +'<br>';
         }
	    var p = document.getElementById('namelist');
        p.innerHTML = list;
         }
   }        
  
};
    var nameInput=document.getElementById('name');
    var name1=nameInput.value;
    request.open('GET', 'http://sekarvaradha.imad.hasura-app.io/submit-name?name=' + name1 ,true);
    request.send(null);
 }; 
 
} 
// making comments
 
var submit=document.getElementById("comment-btn");
if (submit != undefined) {
submit.onclick = function(){

var request = new XMLHttpRequest();
    //create a request
 request.onreadystatechange= function(){
 if (request.readyState === XMLHttpRequest.DONE)
  {
      // take some action
    if (request.status===200)
       { 
        var comments =request.responseText;
        var comnts= JSON.parse(comments);
        var comlist='';
        for (var i=0;i<comnts.length;i++)
         {
          //comlist += '<li>' + comnts[i] + '</li>';
           comlist += comnts[i] + '<br>';
           var p =document.getElementById("show-comment");
           p.innerHTML= comlist;
          }
        }
  }
};

   // make the request
  
   var comment=document.getElementById('comment');
   var txt =comment.value;
    request.open('GET', 'http://sekarvaradha.imad.hasura-app.io/submit-comment?comment=' +txt, true);
    request.send(null); 
}; 
}

var login=document.getElementById("submit-login");
if (login != undefined) {
login.onclick = function(){
var request = new XMLHttpRequest();
 alert ("ok");
    //create a request
 request.onreadystatechange= function(){
 if (request.readyState === XMLHttpRequest.DONE)
  {
      // take some action
      alert("ook");
      alert(request.status);
      
    if (request.status===200)
       { 
        	console.log("user loggedin");
	      alert("user successfully loggedin");
       
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
  alert(username);
  alert(password);
  console.log(username);
  console.log(password);

request.open('POST', 'http://sekarvaradha.imad.hasura-app.io/login', true);

request.setRequestHeader('Content-Type','application/json');
request.send(JSON.stringify({username:username,password:password})); 
};  
}

// article comments

var buttn=document.getElementById("article-comment");
if (buttn != undefined) {
buttn.onclick = function(){

var request = new XMLHttpRequest();
    //create a request
 request.onreadystatechange= function(){
 if (request.readyState === XMLHttpRequest.DONE)
  {
      // take some action
    if (request.status===200)
       { 
        
        var comments =request.responseText;
        var comnts= JSON.parse(comments);
        var comlist='';
        for (var i=0;i<comnts.length;i++)
         {
          //comlist += '<li>' + comnts[i] + '</li>';
           comlist += comnts[i] + '<br>';
           var p =document.getElementById("display-comment");
           p.innerHTML= comlist;
          }
        }
  }
};

   // make the request
  
   var comment=document.getElementById('comment-article');
   
   var txt =comment.value;
   request.open('GET', 'http://sekarvaradha.imad.hasura-app.io/article-comment?comment=' +txt, true);
   //request.open('GET', 'http://localhost:8080/article-comment?comment=' +txt, true);
    request.send(null); 
}; 
} 