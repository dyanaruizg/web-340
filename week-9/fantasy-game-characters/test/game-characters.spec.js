"use strict";
/*    
  Pragmatic NodeJS 1st Edition
  Chapter 9
  Fantasy game characters

  Author: Diana Ruiz Garcia
  Date:   05/17/2024
  Filename: game-characters.spec.js
*/

// Import the GameCharacters class
const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters; // Variable to access the GameCharacters class

  beforeEach(() => {
    // Initialize variable to the GameCharacters class
    gameCharacters = new GameCharacters();
  });

  // Test that data is being returned from the game-characters-data script.
  test("should return game characters data", (done) => {
    gameCharacters.getCharacters((data, error) => {
      expect(error).toBeNull();
      expect(data).toEqual([
        { Class: "Warrior", Gender: "Male",
          FunFact: "He has inherited his ability to live and breathe underwater."
        }, { Class: "Mage", Gender: "Female",
          FunFact: "She is the princess of the Amazons."
        }, { Class: "Rogue", Gender: "Other",
          FunFact: "He is buried in the rubble along with magical scarab that gave him super-powers."
        }
      ]);
      done();
    });
  });

  // Test that it handles an error when the game-characters-data script is not found.
  test("should handle an error when the game characters data script is not found", (done) => {
    const gameCharacters = new GameCharacters("nonexistent-script.js");
    gameCharacters.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });

  // Test that it handles an error when the game-characters-data script fails.
  test("should handle an error when the game characters data script fails", (done) => {
    const gameCharacters = new GameCharacters("failing-script.js");
    gameCharacters.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});