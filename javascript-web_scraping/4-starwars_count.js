#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

let count = 0;

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    const { results } = JSON.parse(body);
    for (const result of results) {
      const { characters } = result;
      for (const character of characters) {
        if (character.includes('18')) {
          count++;
        }
      }
    }
    console.log(count);
  }
});
