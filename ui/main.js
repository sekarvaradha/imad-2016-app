// counter code
var button=document.getElementById("counter");

button.onclick = function(){
// make a request to counter endpoint
var request = new XMLHttpRequest();
// capture the response and store in a variable
request.onreadystatechange =function(){
  if (request.readyState === XMLHttpRequest.DONE)
    {
      if (request.Status===200)
       { 
	var counter=request.responseText;
	var span = document.getElementById('count');
	span.innterHTML=counter.toString();
         }
   }
   
};
// render the variable in the correct span
  request.open('GET', 'http://sekarvaradha.imad.hasura-app.io/counter',true);
  request.send(null);
  
};

var nameinput=document.getElementbyId('Name');
var value=nameinput.value;
var submit =document.getElementById('submit-btn');
 submit.onclick = function() {
  var request = new XMLHttpRequest();
// capture the response and store in a variable
  request.onreadystatechange =function(){
     if (request.readyState === XMLHttpRequest.DONE)
      {
      if (request.Status===200)
       { 
	     var names=request.responseText;
	     var list='';
        for (var i=0;i<name.length;i++)
          {
           list += '<li>' + names[i] + '</li>';
             }
	
	     var ul = document.getElementById(namelist);
         ui.innerHTML =list;
         }
   }        
  
 
  
};
    request.open('GET', 'http://sekarvaradha.imad.hasura-app.io/submit-name?name=',+name,true);
     request.send(null);
 };  
