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
         ul.innerHTML =list;
         }
   }        
  
};
    var nameinput=document.getElementbyId('Name');
    var name=nameinput.value;
    request.open('GET', 'http://sekarvaradha.imad.hasura-app.io/submit-name?name='+name,true);
     request.send(null);
 };  