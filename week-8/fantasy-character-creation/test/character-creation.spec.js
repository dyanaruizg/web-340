"use strict";
/*    
  Pragmatic NodeJS 1st Edition
  Chapter 8
  Fantasy character creation

  Author: Diana Ruiz Garcia
  Date:   05/11/2024
  Filename: character-creation.spec.js
*/

// For promises:
const fs = require('fs').promises;

describe("Character Creation Module", () => {
  // Variables that control the creation and get of characters 
  let createCharacter;
  let getCharacters;
  // Creating a character
  const character = {
    class: "Rogue",
    gender: "Female",
    funFact: "She grew up among the Amazons."
  };

  beforeEach(() => {
    // Resets the module registry
    jest.resetModules();
    // Creates a mock function and tracks calls to writeFile and readFile methods 
    // and returns a Jest mock function. 
    jest.spyOn(fs, 'writeFile').mockImplementation(() => Promise.resolve());
    jest.spyOn(fs, 'readFile').mockImplementation(() => Promise.resolve(character));
    // Access the functions of creating a character
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  // Test that createCharacter writes a new character to the file
  test("writes a new character to the file", async () => {
    await expect(createCharacter(character)).resolves.toBeUndefined();
  });

  // Test that getCharacters reads characters from the file
  test("reads characters from a file", async () => {
    const characters = await getCharacters();
    expect(characters).toEqual(character);
  });

  // Test that getCharacters handles errors when reading from the file
  test("handles errors when reading characters", async () => {
    fs.readFile.mockImplementationOnce(() => Promise.reject(new Error("File not found")));
    await expect(getCharacters()).rejects.toThrow("File not found");
  });
});