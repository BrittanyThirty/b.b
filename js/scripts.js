function myFunction(input){
  for (var i=0; i < input.length; i++){
    if (input[i]=="0"){
      return;
    }
  }

}










$(document).ready(function() {
  $("form#words").submit(function(event)
    event.preventDefault();
}






// $("form#stress_survey").submit(function(event){
//   event.preventDefault();
//   var stress = 0;
//   var health = 0;
//   var methods = 0;
//
//   $("input:checkbox[name=stress-warnings]:checked").each(function() {
//     stress += 1;
//   });
//   $("input:checkbox[name=health-symptoms]:checked").each(function() {
//     health += 1;
//   });
//   $("input:checkbox[name=coping-methods]:checked").each(function()  {
//     methods += 1;
//   });
//   console.log (stress);
//   if ((stress + health) >= 5) {
//     if (methods >= 3) {
//       $('#good-job').toggle();
//     } else {
//       $('#stress-advice').toggle();
//     }
//   } else {
//       $('#no-worries').toggle();
//   }
// });
// });
//
//
