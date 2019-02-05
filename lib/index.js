$(document).ready(function() {
  fetch('https://enigmatic-beach-47018.herokuapp.com/api/v1/foods')
  .then(response => response.json())
  .then(foods => displayFood(foods))
  .catch((error) => console.error({ error }))

  //create display food variable, pass in json
  const displayFood = (foods) => {
    //each through the foods and append table

    $.each(foods, function(i, food) {
      $('#foods-table tbody').append('<tr><td>' + foods[i].name + '</td><td>' + foods[i].calories + '</td><td>'+ "add" + '</td><td>' + "add" + '</td><td>'+ "add" + '</td></tr>');    })
  }

})
