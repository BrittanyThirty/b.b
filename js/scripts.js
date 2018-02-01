//Back

var bb = function(num) {
  for (var i= 0; i < number; i++){
    if(num[i]==1) {
      console.log("Beep");
    } else if (num % 2 === 0) {
      console.log("Boop");
    } else if ((num & 2) == 0 && (year % 33) != 0) {
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


    $(".number").text(result);
     $("#result").show();
  });
});
