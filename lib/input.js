'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.action = this.getAction(Object.keys(args)[1]);
    this.payload = this.getUserInput(args.add || args.a);
    this.category = this.getCategory(args.category);
    this.id = this.getID(args.delete);
  }
  getAction(action) {
    return action;
  }

  getUserInput(payload = '') {
    return typeof payload === 'string' ? payload : '';
  }

  getCategory(category) {
    return typeof category === 'string' ? category : '';
  }

  getID(id) {
    console.log(id);
    return typeof id === 'string' ? id : '';
  }

  valid() {
    return this.action && this.payload;
  }
}

module.exports = Input;
