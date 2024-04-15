/**
 * Author: Diana Ruiz Garcia
 * Date: 04/13/2024
 * File Name: superhero.js
 * Description: This code create a superhero event emitter.
 */

"use strict";

// Import the EventEmitter library
const EventEmitter = require("events");

// SuperheroEmitter class that extends EventEmitter
class SuperheroEmitter extends EventEmitter {
  constructor() {
    super();
  }

  // Function that emits an action event
  performAction(action) {
    if (action == null) {
      this.emit("error", new Error("Enter an action to perform."));
      return;
    }
    this.emit("action", action);
  }

  // Function that emits a danger event
  encounterDanger(danger) {
    if (danger == null) {
      this.emit("error", new Error("Enter a danger to encounter."));
      return;
    }
    this.emit("danger", danger);
  }

  // Function that emits a help event
  helpSomeone(person) {
    if (person == null) {
      this.emit("error", new Error("Enter a person to help."));
      return;
    }
    this.emit("help", person);
  }
}

module.exports = SuperheroEmitter;