$( document ).ready(function() {
    $.ajax({
      type: 'GET',
      url: `https://enigmatic-beach-47018.herokuapp.com/api/v1/foods`,
      success: function(result) {
        var foodData= result
        displayFood(foodData);
      }
    })
  })

$( document ).ready(function() {
    $.ajax({
      type: 'GET',
      url: `https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/1/foods`,
      success: function(result) {
        var breakfastData = result
        displayBreakfast(breakfastData);
      }
    })
  })

$( document ).ready(function() {
    $.ajax({
      type: 'GET',
      url: `https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/2/foods`,
      success: function(result) {
      var lunchData = result
        displayLunch(lunchData);
      }
    })
  })

  $( document ).ready(function() {
      $.ajax({
        type: 'GET',
        url: `https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/3/foods`,
        success: function(result) {
        var dinnerData = result
          displayDinner(dinnerData);
        }
      })
    })


  function addBreakfast(food) {
    $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/'+ 1 +'/foods/'+ food, {
        type: 'POST',
        success: function(result){
          result }
      })
  }

  function addLunch(food) {
    $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/'+ 2 +'/foods/'+ food, {
      type: 'POST'
    })
  }

  function addDinner(food) {
    $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/'+ 3 +'/foods/'+ food, {
      type: 'POST',
    })
  }

  function displayFood(foodData){
    foodData.forEach(function(food,index) {
      $('#foods-table tbody').append(`<tr>
        <td>${food.name}</td>
        <td>${food.calories} </td>

        <td> <button onclick= "addBreakfast(${food.id})">Add</button></td>

        <td> <button onclick= "addLunch(${food.id})" >Add</button></td>

        <td> <button onclick= "addDinner(${food.id})" >Add</button></td>

      </tr>`)
  })
};

function displayBreakfast(breakfastData){
  breakfastData.foods.forEach(function(food,index) {
    $('#breakfast-table tbody').append(`<tr>
      <td>${food.name}</td>
      <td>${food.calories} </td>
    </tr>`)
})
};

function displayLunch(lunchData){
  lunchData.foods.forEach(function(food,index) {
    $('#lunch-table tbody').append(`<tr>
      <td>${food.name}</td>
      <td>${food.calories} </td>
    </tr>`)
})
};

function displayDinner(dinnerData){
  dinnerData.foods.forEach(function(food,index) {
    console.log(food)
    $('#dinner-table tbody').append(`<tr>
      <td>${food.name}</td>
      <td>${food.calories} </td>
    </tr>`)
})
};
