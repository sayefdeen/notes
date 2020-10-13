'use strict';

const minimist = require('minimist');
const Input = require('../lib/input');

jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    _: [],
    add: 'Enter Your message',
  };
});

describe('Input', () => {
  describe('validationMethod', () => {
    it('action return undefined if not specified', () => {
      const input = new Input();
      expect(input.getAction()).toBeUndefined();
    });
    it('action return add if it was specified correctly', () => {
      const input = new Input();
      expect(input.getAction('add')).toEqual('add');
    });
    it('return the same action was entered', () => {
      const input = new Input();
      expect(input.getAction('foo')).toEqual('foo');
    });
  });

  describe('messageValidation', () => {
    it('return text of the message if entered correctly ', () => {
      const input = new Input();
      const message = 'Test for a user input';
      expect(input.getUserInput(message)).toEqual(message);
    });

    it('return empty string if it was passed as an empty string', () => {
      const input = new Input();
      const empty = '';
      expect(input.getUserInput(empty)).toEqual(empty);
    });
    it('return an empty string if it was passed anything but string', () => {
      const input = new Input();
      const userInput = 12345687;
      expect(input.getUserInput(userInput)).toEqual('');
    });
    it('default is an empty string if nothing was passed', () => {
      const input = new Input();
      expect(input.getUserInput()).toEqual('');
    });
  });

  describe('Validation', () => {
    it('return true when proper object is given', () => {
      const input = new Input();
      expect(input.valid()).toBeTruthy();
    });
  });
});
