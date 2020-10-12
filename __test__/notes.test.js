'use strict';

const NOTES = require('../lib/notes');

jest.spyOn(global.console, 'log');

describe('Notes', () => {
  it('dose nothing if execute was with invalid options', () => {
    const notes = new NOTES();
    const obj = {
      action: 'wow',
      payload: '',
    };
    notes.execute(obj);
    expect(console.log).not.toHaveBeenCalled();
  });

  it('log out the message that was passed when execute has object', () => {
    const notes = new NOTES();
    const obj = {
      action: 'add',
      payload: 'Enter your message',
    };
    notes.execute(obj);
    expect(console.log).toHaveBeenCalled();
  });
});
