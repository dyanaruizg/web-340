/**
 * Author: Diana Ruiz Garcia
 * Date: 03/21/2024
 * File Name: weight-converter.js
 * Description: Script that converts pounds to kilograms.
*/

"use strict";

// TODO: Implement the weight conversion logic here
function main() {
  const pounds = process.argv[2]; // get the pounds from CLI args

  let numeric_exp = /[\d]/; // regular expression for numeric values

  // check if the user entered pounds
  if (process.argv.length != 3) {
    console.error("stderr: 'Usage: node weight-converter.js <pounds>'"); 
    process.exit(1); // exit with a non-zero error code
  } 
  // check if the user entered non-numeric argument
  else if (!numeric_exp.test(pounds)) {
    console.error("stderr: 'Input must be a number'");
    process.exit(1); // exit with a non-zero error code
  }

  let kilograms = pounds / 2.2046; // convert pounds to kilograms

  console.log("Weight in kilograms: " + kilograms.toFixed(2)); // display the weight in kilograms
}

main(); // call the main function