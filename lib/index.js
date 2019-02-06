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

      function addBreakfast(food) {
        $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/'+ 1 +'/foods/'+ food, {
          type: 'POST', success: function(result){
            result
          }
        })
      }

      function addLunch(food) {
        $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/'+ 2 +'/foods/'+ food, {
          type: 'POST'
        })
      }

      function addDinner(food) {
        $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/'+ 3 +'/foods/'+ food, {
          type: 'POST'
        })
      }

  function displayFood(foodData){
    foodData.forEach(function(food,index) {
      console.log(food);
      $('#foods-table tbody').append(`<tr>
        <td>${food.name}</td>
        <td>${food.calories} </td>

        <td> <button onclick= "addBreakfast(${food.id})">Add</button></td>

        <td> <button onclick= "addLunch(${food.id})" >Add</button></td>

        <td> <button onclick= "addDinner(${food.id})" >Add</button></td>

      </tr>`)


  })
};
