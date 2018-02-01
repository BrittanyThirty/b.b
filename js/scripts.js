//Back

var bb = function(number) {
  for (var i= 0; i < result.length; i++){
var num = prompt("message");
    if(num % 1 === 0 ) {
      console.log("Beep");
    } else if (num % 1 === 1) {
      console.log("Boop");
    } else if (num % 3 === 0) {
      console.log("Sorry Dave. I am araid I cannot do that!");
    } else {
      return result;
    }
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
