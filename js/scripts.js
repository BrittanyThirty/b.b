//Back
var number = function(userNumber) { //user inputs
  var result = []; // initialize new array

  for(var index = 0; index <= userNumber; i++) {
  var stringNumber = index.toString();

  if (index % 3 === 0 && index > 0) {
    result.push("Sorry Dave. I'm afraid I can't do that!");
  } else if (stringNumber.includes("0")) {
  result.push("beep!");
} else if (airShove.includes(0)) {
  $('.number').append(zero);
} else {

//UI
$(document).ready(function() {

  $("#formbb").submit(function(event) {
    event.preventDefault();

    var userNumber = parseInt($("#userInput").val());
    message(userNumber);
    var result = number(userNumber);

    $("#result").show();
  });
});
