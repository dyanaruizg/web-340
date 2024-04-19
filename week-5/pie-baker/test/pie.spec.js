/**
 * Author: Diana Ruiz Garcia
 * Date: 04/18/2024
 * File Name: Test
 * Description: This code test the bakePie function.
 */

"use strict";

// Import the bakePie function
const { bakePie } = require("../src/pie");

// This is used for mocking process.exit calls in the bakePie function
// it is needed to prevent the test from exiting prematurely and failing
const exit = jest.fn(process, 'exit').mockImplementation((code) => code);

describe("bakePie", () => {
  let log;

  beforeEach(() => {
    log = jest.fn(console, "log");
  });

  afterEach(() => {
    log.mockRestore();
  });

  // Function that test to bake an apple pie with the essential ingredients
  test("bake a pie with the essential ingredients", () => {
    const ingredients = [
      "Apples",
      "Spices",
      "Lemon",
      "Sugar",
      "Flour",
      "Butter"
    ];
    bakePie("Apple", ingredients);
    expect(log).toBe("The Apple pie was successfully baked!");
    expect(exit).not.toBe("The Apple pie was not baked correctly.");
  });

  // Function that test to bake a blueberry pie with the essential ingredients
  test("bake a pie with the essential ingredients", () => {
    const ingredients = [
      "Blueberries",
      "Flour",
      "Lemon",
      "Milk",
      "Sugar",
      "Cinnamon",
      "Butter"
    ];
    bakePie("Blueberry", ingredients);
    expect(log).toBe("The Blueberry pie was successfully baked!");
    expect(exit).not.toBe("The Blueberry pie was not baked correctly.");
  });

  // Function that test to bake a pumpkin pie without the essential ingredients
  test("bake a pie without the essential ingredients", () => {
    const ingredients = [
      "Flour",
      "Eggs",
      "Pumpkin",
      "Heavy cream",
      "Sugar",
      "Milk",
      "Spices"
    ];
    bakePie("Pumpkin", ingredients);
    expect(log).toBe("The Pumpkin pie was successfully baked!");
    expect(exit).not.toBe("The Pumpkin pie was not baked correctly.");
  });
});