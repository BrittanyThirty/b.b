//Back


var three = "Sorry Dave. I am araid I cannot do that!";
var one = "Boop";
var zero = "Beep";

  for (var i= 0; i < number.length; i++){
    if(num[i]==1) {
      alert("Beep");
    } else if (num % 2 === 0) {
      alert("Boop");
    } else if (num % 3 === 0 && !== )  {
      alert("Sorry Dave. I am araid I cannot do that!");
    } else {
      return result;
    }
  }
//UI




$(document).ready(function() {
  $("form#beep-boop").submit(function() {
    event.preventDefault();

    var number = parseInt($("input#number").val());
    var result = bb(number);


    $(".number").text(number);
     $("#result").show();
  });
});
