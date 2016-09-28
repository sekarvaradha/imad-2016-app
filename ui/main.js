// counter code
var button=document.getElementById("counter");
counter=0;
button.onclick = function(){
// make a request to counter endpoint
var request = new XMLHttpRequest();
// capture the response and store in a variable
/*request.onreadystatechange =function(){
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
  request.open('GET', 'http://sekarvaradha.imad.hasura-app.io/counter','true');
  request.send(null);*/
  counter=counter+1;
  var span =document.getElementById("count");
  span.innerHTML= counter.toString();
  
};
