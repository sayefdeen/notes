'use strict';

const { v4: uuidv4 } = require('uuid');

class Notes {
  constructor() {}

  execute(obj) {
    const validation = /a|add/i;
    if (validation.test(obj.action)) {
      if (obj.payload) {
        console.log(`Adding Note: ${obj.payload}`);
        this.add(obj);
      }
    }
  }

  add(obj) {
    let id = uuidv4();
    console.log({
      noteID: id,
      text: obj.payload,
    });
  }
}
module.exports = Notes;
