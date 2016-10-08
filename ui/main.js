// counter code

var button=document.getElementById("counter");
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

// Name List Programme

var submit =document.getElementById('submit-btn');
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
           list += '<li>' + names[i] + '</li>';
          
             }
	
	 
	     var ul = document.getElementById('namelist');
         ul.innerHTML = list;
         }
   }        
  
};
    var nameInput=document.getElementById('name');
    var name1=nameInput.value;
    
    request.open('GET', 'http://sekarvaradha.imad.hasura-app.io/submit-name?name=' + name1 ,true);
    request.send(null);
 };  
 
 // making comments
 
var bttn=document.getElementById("comment-btn");
bttn.onclick = function(){
    alert("ok");
var request = new XMLHttpRequest();
    //create a request
 request.onreadystatechange= function(){
 if (request.readyState === XMLHttpRequest.DONE)
  {
      // take some action
    if (request.status===200)
       { 
          alert("ok..ok");
        var comments =request.responseText;
        var comnts= JSON.parse(comments);
        var comlist=''
        for (var i=0;i<comnts.length;i++)
         {
           comlist += '<li>' + comnts[i] + '</li>';
           alert(comlist);
             }
	
        var ul =document.getElementById("show-comment");
        ul.innerHTML= comlist;
       }
  }
}; 

   // make the request
  
   var comment=document.getElementById('comment');
   var txt =comment.value;
    request.open('GET', 'http://sekarvaradha.imad.hasura-app.io/submit-comment?comment=' +txt, true);
    request.send(null); 
}; 

 
 
 