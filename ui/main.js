// counter code
var counter=0;
var button=document.getElementById("counter");

button.onclick = function(){
 alert("hello");
 var request = new XMLHttpRequest();
    //create a request
 request.onreadystatechange =function(){
 if (request.readyState === XMLHttpRequest.DONE)
  {
      // take some action
    if (request.Status===200)
       { 
        counter=counter+1;
        var span=document.getElementById("count");
         span.innerHTML=counter.toString();
       }
  }
};

   // make the request
    request.open('GET', 'http://sekarvaradha.imad.hasura-app.io/counter' +name,true);
     request.send(null);
};
