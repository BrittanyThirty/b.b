//Back
var numbers = function(userNumber) { //user inputs
  var result = []; // initialize new

  for(var index = 0; index <= userNumber; i = i + 1) { //level up
    var stringNumber = index.toString(); //per includes

    if (index % 3 === 0 && index > 0) { //divisible by three
      result.push("Sorry Dave. I'm afraid I can't do that!"); //resultant text per assign
    } else if (stringNumber.includes("0")) { //second condition check
      result.push("Beep!"); //resultant text if foregoing met
    } else if (stringNumber.includes("1")) { //third condition
      result.push("Boop!"); //resultant
    } else {
      result.push(index); //if none of above cond met push index userNum
    }

  }
    return result; //return state
  }
//UI
$(document).ready(function() {

  $("#formbb").submit(function(event) { //form upon submit
    event.preventDefault(); // prevent user visibility issues
    var userNumber = parseInt($("userInput").val()); //return a num-parse int
    var result = numbers(userNumber);

    $("#result").show();
  });
});
