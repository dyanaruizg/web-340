"use strict";
/*    
  Pragmatic NodeJS 1st Edition
  Chapter 9
  Fantasy game characters

  Author: Diana Ruiz Garcia
  Date:   05/17/2024
  Filename: game-characters.js
*/

// Import the spawn function from the child_process module
const { spawn } = require("child_process");
// Import the join function from the path module
const { join } = require("path");
// Create the path to the script file
const dataFile = join(__dirname, "game-characters-data.js");

// Class that retrieves and processes data from a separate 
// JavaScript file using Node.js child processes.
class GameCharacters {
  // Constructor that use the path created and store the path 
  // in an instance variable 
  constructor(scriptPath = dataFile) {
    this.scriptPath = scriptPath;
  }

  // Method that get the characters from a game
  getCharacters(callback) {
    // Variable that spawns a child process to run the script
    const child = spawn("node", [this.scriptPath]);
    // Captures the data it sends back
    child.stdout.on("data", (data) => {
      const gameData = JSON.parse(data.toString());
      // Passes the data to a callback function
      callback(gameData, null);
    });
    // If the child process sends any data to stderr, this should be 
    // logged to the console
    child.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
      // Passed to the callback function
      callback(null, new Error(data.toString()));
    });
    // If there’s an error while spawning the child process, it 
    // should be logged to the console
    child.on("error", (error) => {
      console.error(`spawn error: ${error}`);
      // Passed to the callback function
      callback(null, error);
    });
  }
}

// Export the GameCharacters class
module.exports = { GameCharacters };