// $(document).ready(function() {
//   fetch('https://enigmatic-beach-47018.herokuapp.com/api/v1/foods')
//   .then(response => response.json())
//   .then(foods => displayFood(foods))
//   .catch((error) => console.error({ error }))
//
//   //create display food variable, pass in json
//   const displayFood = (foods) => {
//     //each through the foods and append table
//     var foodTable = document.getElementById("foods-table tbody")
//
//     .each(foods, function(i, food) {
//       foodTable.append('<tr><td>' + foods[i].name + '</td><td>' + foods[i].calories + '</td><td>'+ "add" + '</td><td>' + "add" + '</td><td>'+ "add" + '</td></tr>');    })
//   }
//
// })

$( document ).ready(function() {
    $.ajax({
      type: 'GET',
      url: `https://enigmatic-beach-47018.herokuapp.com/api/v1/foods`,
      success: function(result) {
        var foodData= result
        console.log(foodData);
        displayFood(foodData);
      }
    })
  })


  function displayFood(foodData){
    var foodTable = document.getElementById("foods-table tbody")
    foodData.forEach(function(food,index) {
      foodTable.appendChild('<tr><td>' + food[index].name + '</td><td>' + food[index].calories + '</td><td>'+ "add" + '</td><td>' + "add" + '</td><td>'+ "add" + '</td></tr>');
    })
  }
