"use strict";
/*    
  Pragmatic NodeJS 1st Edition
  Chapter 6
  Fantasy game character creation

  Project to create a character creation screen for a fantasy video game
  Author: Diana Ruiz Garcia
  Date:   04/28/2024

  Filename: server.js
*/

const http = require('http');
const url = require('url');

// New Character
let newCharacter = {
  class: "",
  gender: "",
  fact: ""
};

// TODO: Implement your server here
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // Parse the URL and the query parameters
  const pathname = parsedUrl.pathname; // Get the path
  const query = parsedUrl.query; // Get the query parameters as an object

  // POST route for creating a character
  if (pathname === '/create' && req.method === 'POST') {
    res.writeHead(201);
    // Set the data of the new character obtained from query parameters
    newCharacter.class = query.class;
    newCharacter.gender = query.gender;
    newCharacter.fact = query.fact;
    res.end(`New ${newCharacter.class } ${newCharacter.gender} character has been created.`);
  } 
  // POST route for confirming the character creation
  else if (pathname === '/confirm' && req.method === 'POST') {
    res.writeHead(200);
    res.end('Character creation has been confirmed.');
  } 
  // GET route for viewing the character
  else if (pathname === '/view' && req.method === 'GET') {
    res.writeHead(200);
    res.end(`Character: ${newCharacter.class} ${newCharacter.gender} with the fun fact of ${newCharacter.fact}`);
  } 
  // The response about the resource requested is missing
  else {
    res.writeHead(404);
    res.end();
  }
});

// HTTP server that is listening on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Export the server
module.exports = server;