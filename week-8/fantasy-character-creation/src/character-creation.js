"use strict";
/*    
  Pragmatic NodeJS 1st Edition
  Chapter 8
  Fantasy character creation

  Author: Diana Ruiz Garcia
  Date:   05/11/2024
  Filename: character-creation.js
*/

// Import methods from the fs module’s promise API
const { writeFile, readFile} = require('fs').promises;
// Import the join method from the path module. 
const { join } = require("path");
// Get character file of the current directory
const CHARACTERS_FILE = join(__dirname, "characters.txt");

// Function that writes a character to "characters.txt"
async function createCharacter(character) {
  try {
    await writeFile(CHARACTERS_FILE, character);
  } catch(error) {
    throw error;
  }
}

// Function that reads the contents of the file named characters.txt
async function getCharacters() {
  try {
    const characters = await readFile(CHARACTERS_FILE, "utf8");
    return characters;
  } catch (error) {
    throw error;
  }
}

// Export functions
module.exports = { createCharacter, getCharacters };