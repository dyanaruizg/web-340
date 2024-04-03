"use strict";
/*
  Author: Diana Ruiz Garcia
  Date: 04/03/2024
  File Name: distance-calculator.js
  Description: This code calculates the distance between two planets in AU
*/

// Function that calculates the distance between two planets in AU
function calculateDistance(planet1, planet2) {
  let alphabetic_exp = /^[a-zA-Z]+$/; // regular expression for alphabetic values
  let alphabetic_exp2 = /[A-Z]/; // regular expression for the first letter

  if (!alphabetic_exp.test(planet1) && !alphabetic_exp.test(planet2)) {
    throw Error("Input must be a text");
  }

  if (!alphabetic_exp2.test(planet1) && !alphabetic_exp2.test(planet2)) {
    throw Error("The first letter must be uppercase");
  }

  // Calculate the astronomical unit of each planet
  let planet1AU = distanceFromTheSun(planet1);
  let planet2AU = distanceFromTheSun(planet2);
  let distance = planet2AU - planet1AU;

  // Function that calculates the distance from the sun in AU
  function distanceFromTheSun(planet) {
    let astronomicalUnit = 0;

    switch (planet) {
      case "Mercury":
        astronomicalUnit = 0.39;
        break;
      case "Venus":
        astronomicalUnit = 0.72;
        break;
      case "Earth":
        astronomicalUnit = 1;
        break;
      case "Mars":
        astronomicalUnit = 1.52;
        break;
      case "Jupiter":
        astronomicalUnit = 5.2;
        break;
      case "Saturn":
        astronomicalUnit = 9.54;
        break;
      case "Uranus":
        astronomicalUnit = 19.2;
        break;
      case "Neptune":
        astronomicalUnit = 30.06;
        break;
    }

    return astronomicalUnit;
  }

  return distance.toFixed(2);
}

// Export the function using the module.exports object
module.exports = calculateDistance;