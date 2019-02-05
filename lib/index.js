function getFoods() {
  fetch(`https://fast-meadow-36413.herokuapp.com/`)
    .then(response => response.json())
    .then(foods => appendFoods(foods))
    .catch(error => console.error({ error }));
}


// This toggles between hidden and visible
// $(document).ready(function() {
//   let button = document.getElementById("diary-button");
//   let myDiary = document.getElementById("myDiary");
//   $("#diary-button").on('click', function(){
//     $('#myDiary').toggle();
//   })
// })

// $(document).ready(function() {
//   let button = document.getElementById("diary-button");
//   let myDiary = document.getElementById("myDiary");
//   $("#diary-button").on('click', function(){
//     $("#myDiary").removeClass("hidden-div");
//     $("#myDiary").assClass("vis-div");
//
//   })
// })
