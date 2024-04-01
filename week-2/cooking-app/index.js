/**
 * Author: Diana Ruiz Garcia
 * Date: 03/30/2024
 * File Name: index.js
 * Description: Creating a simple recipe application using the Node.js CommonJS module system
*/

// Import the createRecipe, setTimer, and quit functions from the recipes.js file
const { createRecipe, setTimer, quit } = require("./recipes.js");

// Array of Recipes
const recipe = [
  "ingredient1",
  "ingredient2"
];

// Main function for the program
function main() {
  console.log(createRecipe(recipe));
  console.log(setTimer(15));
  console.log(quit());
}

// Call the main function 
main();