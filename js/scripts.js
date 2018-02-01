//Back
function message (userNumber) {
  var three = "Sorry Dave. I am afraid I cannot do that!";
  var one = "Boop";
  var zero = "Beep";
}

for(var i = 0; i < airShove.length; i++){

if (airShove % 3 === 0) {
  $('.number').append(three);
} else if (airShove.includes(1)) {
  $('.number').append(one);
} else if (airShove.includes(0)) {
  $('.number').append(zero);
} else {

// } return message;

}

//UI
$(document).ready(function() {

  $("form#beep-boop").submit(function(event) {
    event.preventDefault();

    var userNumber = parseInt($("#user").val());
    message(userNumber);
    var airShove = [];
    var airYarn = userNumber.split('');

    $(".number").text(message);
    $("#result").show();
  });
