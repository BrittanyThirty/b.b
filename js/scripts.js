//Back
var number = function(userNumber) { //user inputs
  var result = []; // initialize new array

//arr plus one arrive at appropriate location zero index
  for(var index = 0; index <= userNumber; +=1) {
  var stringNumber = index.toString();

  if (index % 3 === 0 && index > 0) {
    result.push("Sorry Dave. I'm afraid I can't do that!");
  } else if (stringNumber.includes("0")) {
  result.push("Beep!");
} else if (stringNumber.includes("1")) {
  result.push("Boop!");
} else {
  result.push(index);
}
return result;
}
//UI
$(document).ready(function() {

  $("#formbb").submit(function(event) {
    event.preventDefault();

    var userNumber = parseInt($("#userInput").val());
    var result = number(userNumber);

    $("#result").show();
  });
});
