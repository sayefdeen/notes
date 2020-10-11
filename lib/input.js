'use strict';

const minimist = require('minimist');

function Input() {
  const result = process.argv.slice(2);
  const args = minimist(process.argv.slice(2));
  this.action = this.getAction(result[0].slice(2));
  this.payload = this.getUserInput(result[1]);
}
Input.prototype.getAction = function (action) {
  return action;
};

Input.prototype.getUserInput = function (payload) {
  return payload ? payload : '';
};
module.exports = Input;
