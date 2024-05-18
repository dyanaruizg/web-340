"use strict";
/*    
  Pragmatic NodeJS 1st Edition
  Chapter 9
  Fantasy game characters

  Author: Diana Ruiz Garcia
  Date:   05/17/2024
  Filename: game-characters-data.js
*/

// Declare an array of game characters objects
const gameCharacters = [
  {
    Class: "Warrior",
    Gender: "Male",
    FunFact: "He has inherited his ability to live and breathe underwater."
  },
  {
    Class: "Mage",
    Gender: "Female",
    FunFact: "She is the princess of the Amazons."
  },
  {
    Class: "Rogue",
    Gender: "Other",
    FunFact: "He is buried in the rubble along with magical scarab that gave him super-powers."
  }
];

// Log a JSON stringified array of game characters to the console. 
console.log(JSON.stringify(gameCharacters));