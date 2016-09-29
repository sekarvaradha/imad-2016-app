// counter code
var button=document.getElementById("counter");
var counter=0;
button.onclick = function(){
// make a request to counter endpoint
//var request = new XMLHttpRequest();
// capture the response and store in a variable
//request.onreadystatechange = function(){
 /* if (request.readyState === XMLHttpRequest.DONE)
    {
      if (request.Status===200)
       { 
	var counter=request.responseText;
	var span = document.getElementById('count');
	span.innerHTML=counter.toString();
         }
   }
   
};*/
// render the variable in the correct span
//  request.open('GET', 'http://sekarvaradha.imad.hasura-app.io/counter',true);
  //request.send(null);
  alert("hello");
  counter=counter+1;
  var span=document.getElementById("count");
  span.innerHTML=counter.toString();
  
};


/*var submit =document.getElementById('submit-btn');
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
    var nameinput=document.getElementbyId('Name');
    var name=nameinput.value;
    request.open('GET', 'http://sekarvaradha.imad.hasura-app.io/submit-name?name='+name,true);
     request.send(null);
 };  */
