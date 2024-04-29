"use strict";
/*    
  Pragmatic NodeJS 1st Edition
  Chapter 6
  Fantasy game character creation

  Tests to create a character creation screen for a fantasy video game
  Author: Diana Ruiz Garcia
  Date:   04/28/2024

  Filename: server.spec.js
*/

const http = require('http');
const server = require('../src/server');

describe('Server', () => {
  afterAll(() => {
    server.close();
  });

  // Test that post a creation of a character
  test('responds to /order POST request with query parameter', done => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/create?class=Warrior&gender=Female&fact=She%20likes%20to%20dance%20in%20the%20rain',
      method: 'POST'
    };

    const req = http.request(options, res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      console.log("data " + data);
      res.on('end', () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe(`New Warrior Female character has been created.`);
        done();
      });
    });

    req.end();
  });

  // Test that post a confirmation of the creation of a character
  test('responds to /confirm POST request', done => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/confirm',
      method: 'POST'
    };
    const req = http.request(options, res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe('Character creation has been confirmed.');
        done();
      });
    });

    req.end();
  });

  // Test that get the values of a character
  test('responds to /view GET request', done => {
    http.get('http://localhost:3000/view', res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe("Character: Warrior Female with the fun " +
                          "fact of She likes to dance in the rain");
        done();
      });
    });
  });
});