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
           alert("ok");
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
