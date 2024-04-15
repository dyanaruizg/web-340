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
    // Declare an action result
    let actionResult;

    // Listen for the performAction event
    superhero.on("action", (action) => {
      actionResult = action;
      console.log(`Superhero performs action: ${action}`);
    });
    superhero.performAction("fly");
    assert.strictEqual(actionResult, "fly");
    console.log("Passed testPerformAction \n");
    return true;
  } catch (error) {
    console.log(`Failed testPerformAction: \n ${error.message}`);
    return false;
  }
}

// Function that test the encounterDanger event
function testEncounterDanger() {
  try {
    // Declare a danger result
    let dangerResult;

    // Listen for the encounterDanger event
    superhero.on("danger", (danger) => {
      dangerResult = danger;
      console.log(`Superhero encounters danger: ${danger}`);
    });
    superhero.encounterDanger("fire");
    assert.strictEqual(dangerResult, "fire");
    console.log("Passed testEncounterDanger \n");
    return true;
  } catch (error) {
    console.log(`Failed testPerformAction: \n ${error.message}`);
    return false;
  }
}

// Function that test the helpSomeone event
function testHelpSomeone() {
  try {
    // Declare a person result
    let personResult;

    // Listen for the helpSomeone event
    superhero.on("help", (person) => {
      personResult = person;
      console.log(`Superhero helps: ${person}`);
    });
    superhero.helpSomeone("Mary Jane");
    assert.strictEqual(personResult, "Mary Jane");
    console.log("Passed testHelpSomeone \n");
    return true;
  } catch (error) {
    console.log(`Failed testHelpSomeone: \n ${error.message}`);
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