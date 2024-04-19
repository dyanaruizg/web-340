/**
 * Author: Diana Ruiz Garcia
 * Date: 04/18/2024
 * File Name: Pie
 * Description: This code include a function that takes a type of pie and an array 
 * of ingredients. The function return a message indicating whether the pie was 
 * successfully baked or not. If an essential ingredient is missing, the function
 * log a warning message and call process.exit(1).
 */
"use strict";

// Function that return a message indicating whether a pie was successfully baked or not.
function bakePie(pieType, ingredients) {
  // Declare a variable to save the new ingredients 
  const newIngredients = [];

  // Convert all ingredients to lowercase text and save them in a new array
  for (let i = 0; i < ingredients.length; i++) {
    newIngredients.push(ingredients[i].toLowerCase());
  }

  // Declare variables that verify the ingredients array includes the essential ingredients
  let includeFlour = newIngredients.includes("flour");
  let includeSugar = newIngredients.includes("sugar");
  let includeButter = newIngredients.includes("butter");

  // Verify whether an essential ingredient is missing
  if (includeFlour && includeSugar && includeButter) {
    console.log(`The ${pieType} pie was successfully baked!`);
  } else {
    console.log(`The ${pieType} pie was not baked correctly.`);
    process.exit(1);
  }
}

// Export the bakePie function
module.exports = { bakePie };