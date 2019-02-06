/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

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

	$(document).ready(function () {
	  $.ajax({
	    type: 'GET',
	    url: 'https://enigmatic-beach-47018.herokuapp.com/api/v1/foods',
	    success: function success(result) {
	      var foodData = result;
	      console.log(foodData);
	      displayFood(foodData);
	    }
	  });
	});

	function addBreakfast(food) {
	  $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/' + 1 + '/foods/' + food, {
	    type: 'POST', success: function success(result) {
	      result;
	    }
	  });
	}

	function addLunch(food) {
	  $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/' + 2 + '/foods/' + food, {
	    type: 'POST'
	  });
	}

	function addDinner(food) {
	  $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/' + 3 + '/foods/' + food, {
	    type: 'POST'
	  });
	}

	function displayFood(foodData) {
	  foodData.forEach(function (food, index) {
	    console.log(food);
	    $('#foods-table tbody').append('<tr>\n        <td>' + food.name + '</td>\n        <td>' + food.calories + ' </td>\n\n        <td> <button onclick= "addBreakfast(' + food.id + ')">Add</button></td>\n\n        <td> <button onclick= "addLunch(' + food.id + ')" >Add</button></td>\n\n        <td> <button onclick= "addDinner(' + food.id + ')" >Add</button></td>\n\n      </tr>');
	  });
	};

/***/ })
/******/ ]);