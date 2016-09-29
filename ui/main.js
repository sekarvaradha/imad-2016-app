// counter code
var c=0;
var button=document.getElementById("counter");

button.onClick = function(){
 
  c=c+1;
  var span=document.getElementById("count");
  span.innerHTML=c.toString();
  
};

