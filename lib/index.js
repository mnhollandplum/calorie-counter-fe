function getFoods() {
  fetch(`https://fast-meadow-36413.herokuapp.com/`)
    .then(response => response.json())
    .then(foods => appendFoods(foods))
    .catch(error => console.error({ error }));
}

// function viewDiary() {
//   var x = document.getElementById("myDiary");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

$( document ).ready(function() {
  let button = document.getElementById("diary-button");
  var diary = document.getElementById("myDiary");
  $("#location-btn").on('click', function(){
    $('#myDiary').toggle();
  })
})

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("datefield").setAttribute("max", today);
