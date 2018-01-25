var f = newFib();
var fibonacciSequence = "";
for (var i = 0; i <= 4000; i++) {
    fibonacciSequence += fib.loop(i) + " ";
}

function Fibonacci() {
  this.looping = function() {
    var a = 0, b =1, f =1;
    for(var i = 2; i <=n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
  }
});





// function beepBoop(string) {
// var i;
// var fib = [];
//
// fib[0] = 0;
// fib[1] = 1;
//
//   for (var i=0; i < arr.length; i++){
//     if (input[i]===0]{
//       arr[i] = "a";
//     } else {
//       arr[i] = "e";
//     }
//       return;
//     }
//   }
//
// }





//business

$(document).ready(function() {
  $("form#words").submit(function(event)
    event.preventDefault();
}
