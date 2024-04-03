"use strict";
/*
  Author: Diana Ruiz Garcia
  Date: 04/03/2024
  File Name: distance-calculator.spec.js
  Description: This code test the distance-calculator class
*/

// Import the assert library and distance calculator module
const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

// Function that tests the distance between Venus and Neptune
function testVenusToNeptune() {
  try {
    assert.strictEqual(calculateDistance('Venus', 'Neptune'), "29.34");
    return true;
  } catch (error) {
    console.error("Failed testVenusToNeptune: \n" + error.message);
    return false;
  }
}

// Function that tests the distance between Earth and Mars
function testEarthToMars() {
  try {
    assert.strictEqual(calculateDistance('earth', 'Mars'), "0.52");
    return true;
  } catch (error) {
    console.error("Failed testEarthToMars: \n" + error.message);
    return false;
  }
}

// Function that tests the distance between Jupiter and Saturn
function testJupiterToSaturn() {
  try {
    assert.strictEqual(calculateDistance('Jupiter', 'Saturn'), "4.34");
    return true;
  } catch (error) {
    console.error("Failed testJupiterToSaturn: \n" + error.message);
    return false;
  }
}

// Call the test functions 
let resultVenusToNeptune = testVenusToNeptune();
let resultEarthToMars = testEarthToMars();
let resultJupiterToSaturn = testJupiterToSaturn();

// Verify that the results of the test have been true
if (resultVenusToNeptune && resultEarthToMars && resultJupiterToSaturn) {
  console.log("All tests passed!");
} else {
  console.log("Tests failed.");
}