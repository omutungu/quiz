var testResults = function(one, two ,three){
return one + two + three;


}

$(document).ready(function(){
  $(".start").click(function(){
    $("#test").fadeToggle("slow");
  });
