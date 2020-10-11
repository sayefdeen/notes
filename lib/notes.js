'use strict';

const { v4: uuidv4 } = require('uuid');

let test = {};

test.execute = function (obj) {
  const validation = /a|add/i;
  if (validation.test(obj.action)) {
    if (obj.payload) {
      console.log(`Adding Note: ${obj.payload}`);
      this.add(obj);
    } else {
      console.log('please Dont leave your message empty');
    }
  } else {
    console.log('please Enter A valid Action');
  }
};

test.add = function (obj) {
  let id = uuidv4();
  console.log({
    noteID: id,
    text: obj.payload,
  });
};

module.exports = test;
