'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.action = this.getAction(Object.keys(args)[1]);
    this.payload = this.getUserInput(args.add || args.a);
  }
  getAction(action) {
    return action;
  }

  getUserInput(payload = '') {
    return typeof payload === 'string' ? payload : '';
  }

  valid() {
    return this.action && this.payload;
  }
}

module.exports = Input;
