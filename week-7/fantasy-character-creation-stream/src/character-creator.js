"use strict";
/*    
  Pragmatic NodeJS 1st Edition
  Chapter 7
  Fantasy character creation stream

  Project to create a character creation system for a fantasy video game 
  using Node.js’s built-in stream module. 
  Author: Diana Ruiz Garcia
  Date:   04/30/2024

  Filename: character-creator.js
*/

// Import the Duplex stream class from stream module
const { Duplex } = require('stream');

/* 
  Class that extends the Duplex stream class. 
  The class should process character creation data and output a 
  formatted description. 
*/
class CharacterCreator extends Duplex {
  // Declare the global variables
  constructor(character, options) {
    super(options);
    this.character = character;
    this.queue = [];
  }

  // Method that logs the character creation data.
  _write(chunk, encoding, callback) {
    const characterCreated = chunk.toString().trim();
    if (!characterCreated) {
      callback(new Error("Invalid data"));
      return;
    } 

    this.queue.push(`${characterCreated}`);
    callback();
  }

  // Method that pushes the formatted description of a character 
  // creation data.
  _read(size) {
    if (this.queue.length) {
      this.push(this.queue.shift() + " ");
    } else {
      this.push(null);
    }
  }
}

// Export the CharacterCreator class
module.exports = CharacterCreator;