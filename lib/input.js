'use strict';

const minimist = require('minimist');

function Input() {
  const args = minimist(process.argv.slice(2));
  this.action = this.getAction(Object.keys(args)[1]);
  this.payload = this.getUserInput(args.add || args.a);
}
Input.prototype.getAction = function (action) {
  return action;
};

Input.prototype.getUserInput = function (payload) {
  return payload ? payload : '';
};
module.exports = Input;
