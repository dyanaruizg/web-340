/**
 * Author: Diana Ruiz Garcia
 * Date: 03/30/2024
 * File Name: recipes.js
 * Description: This code contains the functions to create a recipe
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  let recipe = "Recipe created with ingredients: ";

  // Loop that adds the ingredients to the recipe string
  for (let i = 0; i < ingredients.length; i++) {
    if (i != 0) {
      recipe += ", " + ingredients[i];
    } else {
      recipe += ingredients[i];
    }
  }

  return recipe;
}

// Define the setTimer function
function setTimer(minutes) {
  return "Timer set for " + minutes + " minutes";
}

// Define the quit function
function quit() {
  return "Program exited";
}

// Export the functions using the module.exports object
module.exports = {
  createRecipe: createRecipe,
  setTimer: setTimer,
  quit: quit
};