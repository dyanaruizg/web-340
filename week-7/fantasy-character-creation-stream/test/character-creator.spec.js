"use strict";
/*    
  Pragmatic NodeJS 1st Edition
  Chapter 7
  Fantasy character creation stream

  Test to create a character creation system for a fantasy video game 
  using Node.js’s built-in stream module. 
  Author: Diana Ruiz Garcia
  Date:   04/30/2024

  Filename: character-creator.spec.js
*/

// Import the CharacterCreator class
const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  // Test the CharacterCreator to process data correctly when written to.
  test("should process data correctly when written to", (done) => {
    const character = {
      class: "Mage",
      gender: "Male",
      funFact: "He's practically a god."
    };

    for (let item in character) {
      characterCreator.write(character[item]);
    }

    let output = "Character: ";
    characterCreator.on("data", (chunk) => {
      output += chunk;
    });
    characterCreator.on("end", () => {
      expect(output).toBe(
        `Character: ${character.class} ${character.gender} ${character.funFact} `
      );
      done();
    });
  });

  // Test the CharacterCreator to emit an “error” event when an empty string is 
  // written to it.
  test("should emit 'error' when invalid data is written", (done) => {
    characterCreator.on("error", (err) => {
      expect(err.message).toBe("Invalid data");
      done();
    });
    
    characterCreator.write("");
  });

  // Test the CharacterCreator to transform the data correctly when written to.
  test("should transform data correctly when written to", (done) => {
    const character = "Route Female She's the youngest Justice League member.";
    const expectedOutput = `Character: ${character} `;
    let output = "Character: ";

    characterCreator.write(character, 'utf8', () => {
      characterCreator.on('data', (data) => {
        output += data;
        expect(output).toBe(expectedOutput);
        done();
      });
    });
  });
});
