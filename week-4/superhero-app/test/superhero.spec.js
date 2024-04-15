/**
 * Author: Diana Ruiz Garcia
 * Date: 04/13/2024
 * File Name: superhero.spec.js
 * Description: This code test the superhero class
 */

"use strict";

// Import the assert library and SuperheroEmitter module
const assert = require("assert");
const SuperheroEmitter = require("../src/superhero");

// Declare the SuperheroEmitter 
const superhero = new SuperheroEmitter();

// Function that test the performAction event
function testPerformAction() {
  try {
    // Listen for the performAction event
    superhero.on("action", (action) => {
      console.log(`Superhero performs action: ${action}`);
    });
    assert.strictEqual(superhero.performAction("fly"), "fly");
    console.log("Passed testPerformAction");
    return true;
  } catch (error) {
    console.log("Failed testPerformAction: \n" + error.message);
    return false;
  }
}

// Function that test the encounterDanger event
function testEncounterDanger() {
  try {
    // Listen for the encounterDanger event
    superhero.on("danger", (danger) => {
      console.log(`Superhero encounters danger: ${danger}`);
    });
    assert.strictEqual(superhero.encounterDanger("fire"), "fire");
    console.log("Passed testEncounterDanger");
    return true;
  } catch (error) {
    console.log("Failed testEncounterDanger: \n" + error.message);
    return false;
  }
}

// Function that test the helpSomeone event
function testHelpSomeone() {
  try {
    // Listen for the encounterDanger event
    superhero.on("person", (person) => {
      console.log(`Superhero helps: ${person}`);
    });
    assert.strictEqual(superhero.helpSomeone("Mary Jane"), "Mary Jane");
    console.log("Passed testHelpSomeone");
    return true;
  } catch (error) {
    console.log("Failed testHelpSomeone: \n" + error.message);
    return false;
  }
}

// Call the test functions 
let resultPerformAction = testPerformAction();
let resultEncounterDanger = testEncounterDanger();
let resultHelpSomeone = testHelpSomeone();

// Verify that the results of the test have been true
if (resultPerformAction && resultEncounterDanger && resultHelpSomeone) {
  console.log("All tests passed!");
} else {
  console.log("Tests failed.");
}