function getFoods() {
  fetch(`https://fast-meadow-36413.herokuapp.com/`)
    .then(response => response.json())
    .then(foods => appendFoods(foods))
    .catch(error => console.error({ error }));
}


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
