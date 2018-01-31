//Back
var yourNum;
// var resultnumber = [];

function beepBoop(yourNum){

  for (var i= 0; i < result.length; i++){
    if (enterNum.includes(1)) {
      console.log("Beep");
    } else if (enterNum.includes(0)){
      console.log("Boop");
    } else if (resultnumber % 3 === 0){
      console.log("I'm sorry Dave, 'fraid I can't do that!");
    } else {

    }
    return result;
  }

}

//UI
$(document).ready(function() {

  $("form#beep-boop").submit(function() {
    event.preventDefault();

    var number = parseInt($("input#number").val());
    var resultnumber = [];

  });
});











//
// //maybe a do while
// var i = 0; i < enterNum; i++ ;
// do {
//   console.log("Beep");
//   i++;
// } while(enterNum.includes(1))
//
// var j = 0; j < enterNum; j++ ;
// do {
//   console.log("Boop");
//   j++;
// } while(enterNum.includes(0))
//
// var k = 0; k < enterNum; i++ ;
// do {
//   console.log("Sorry Dave. I am araid I can't do that!");
//   k++;
// } while(enterNum.includes % 3===0)
//
// //can the level of brevity...
// var i = 0;
// while(i < 5){
//   console.log(i);
//   i++;
// }
//
