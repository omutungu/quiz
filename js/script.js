var testResults = function(one, two ,three){
return one + two + three;


}

$(document).ready(function(){
  $(".start").click(function(){
    $("#test").fadeToggle("slow");
  });

  $("form#test").submit(function(event){
    var Q1 = parseInt($("input:radio[name=Q1]:checked").val());
    var Q2 = parseInt($("input:radio[name=Q2]:checked").val());
    var Q3 = parseInt($("input:radio[name=Q2]:checked").val());

    var result = testResults(Q1, Q2 ,Q3);

    $("#display").text("Your score is:" + result);

    event.preventDefault();
    $(".final").show();
  });
});
