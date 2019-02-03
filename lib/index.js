function getFoods() {
  fetch(`https://fast-meadow-36413.herokuapp.com/`)
    .then(response => response.json())
    .then(foods => appendFoods(foods))
    .catch(error => console.error({ error }));
}
