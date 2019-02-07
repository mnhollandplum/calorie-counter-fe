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
      })
      location.reload();
  }

  function addLunch(food) {
    $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/'+ 2 +'/foods/'+ food, {
      type: 'POST'
    })
    location.reload();
  }

  function addDinner(food) {
    $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/'+ 3 +'/foods/'+ food, {
      type: 'POST',
    })
    location.reload();
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
      <td><button onclick = "deleteBreakfastItem(${food.id})">Delete</button> </td>
    </tr>`)
})
  $('#breakfast-total-cals').append(
  ` ${addMealTotal(breakfastData)}`
  )
    displayTotals();
};

function displayLunch(lunchData){
  lunchData.foods.forEach(function(food,index) {
    $('#lunch-table tbody').append(`<tr>
      <td>${food.name}</td>
      <td>${food.calories} </td>
      <td><button onclick = "deleteLunchItem(${food.id})">Delete</button> </td>

    </tr>`)
})
  $('#lunch-total-cals').append(
    `${addMealTotal(lunchData)}`
  )
    displayTotals();
};

function displayDinner(dinnerData){
  dinnerData.foods.forEach(function(food,index) {
    $('#dinner-table tbody').append(`<tr>
      <td>${food.name}</td>
      <td>${food.calories} </td>
      <td><button onclick = "deleteDinnerItem(${food.id})">Delete</button> </td>

    </tr>`)
})
  $('#dinner-total-cals').append(
    `${addMealTotal(dinnerData)}`
  )
  displayTotals();

};

function addMealTotal(mealInfo){
  var calNums = [ ];
  mealInfo.foods.forEach(function(food,index){
    calNums.push(food.calories)
  })
  return calNums.reduce((x, y) => x + y);
}

function deleteBreakfastItem(food) {
  $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/'+ 1 +'/foods/'+ food, {
      type: 'DELETE',
      contentType:'application/json',
      success: function(result) {
      location.reload();
    }
  })
}

function deleteLunchItem(food) {
  $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/'+ 2 +'/foods/'+ food, {
      type: 'DELETE',
      contentType:'application/json',
      success: function(result) {
      location.reload();
    }
  })
}
function deleteDinnerItem(food) {
  $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/'+ 3 +'/foods/'+ food, {
      type: 'DELETE',
      contentType:'application/json',
      success: function(result) {
      location.reload();
    }
  })
}

function displayTotals() {
  br_cal = $('tfoot td#breakfast-total-cals').text() || 0;
  ln_cal = $('tfoot td#lunch-total-cals').text() || 0;
  dn_cal = $('tfoot td#dinner-total-cals').text() || 0;
  total_cal = +br_cal + +ln_cal + +dn_cal
  goal_cal = 2000
  $('#totals-table tbody').append(`<tr>
    <td>${goal_cal}</td>
    <td>${total_cal} </td>
    <td>${goal_cal - total_cal} </td>
  </tr>`)
}

function createFood() {
  $('#create-food').on('click', function(){
    console.log("click");
    var name = document.getElementById("food-name").value

    var calories = document.getElementById("food-cal").value
    $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/foods/', {
      type: 'POST',
      data: {name: name,
              calories: calories },
      success: function(result) {
                  alert(`${name} has been added to foods!`);
                  window.location.reload(true);

                }
    })
    console.log(name);
  })

}
