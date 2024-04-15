/**
 * Author: Diana Ruiz Garcia
 * Date: 04/13/2024
 * File Name: index.js
 * Description: This code create a CLI program that uses the SuperheroEmitter class. 
 */

"use strict";

// Import the readline library and SuperheroEmitter module
const readline = require("readline");
const SuperheroEmitter = require("./superhero");

// Declare the SuperheroEmitter 
const superhero = new SuperheroEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Set up event listeners for the superhero object
superhero.on("action", (action) => {
  console.log(`Superhero performs action: ${action}`);
});

superhero.on("danger", (danger) => {
  console.log(`Superhero encounters danger: ${danger}`);
});

superhero.on("help", (person) => {
  console.log(`Superhero helps: ${person}`);
});


rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  // Declare a variable to store the entered arguments as a string 
  let enteredArgs = "";
  for (let arg of args) {
    enteredArgs += arg + " ";
  }

  // Verify the option entered by the user
  switch (command) {
    case "action":
      superhero.performAction(enteredArgs);
      break;
    case "danger":
      superhero.encounterDanger(enteredArgs);
      break;
    case "help":
      superhero.helpSomeone(enteredArgs);
      break;
    default:
      console.log("Enter a command: action, danger, or help, followed by a space and the argument.");
  }

});