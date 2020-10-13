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
      console.log(`Your message ${
        obj.payload ? obj.payload : 'empty/not string'
      }
        please make sure to add a message
        valid message is
        => --add "Enter you message here"
      `);
    }
  } else {
    console.log(`Your action ${
      obj.action ? obj.action : 'was Empty'
    }, That is not a valid action
      valid actions are --add, -a
    `);
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
