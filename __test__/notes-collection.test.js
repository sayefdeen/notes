'use strict';

require('@code-fellows/supergoose');
require('dotenv').config();
const Notes = require('../lib/models/notes-collection');
const notesObj = new Notes();
const sendObject = {
  payload: 'Note from the user',
  category: 'school',
};

const recededObj = {
  text: 'Note from the user',
  category: 'school',
};

describe('Notes Model', () => {
  it('get empty array if DB was empty, called callAll()', async () => {
    const all = await notesObj.callAll();
    // console.log('this all data', all);
    expect(all).toEqual([]);
  });
  it('can create then save() a new note into DB', async () => {
    const savedNote = await notesObj.save(sendObject);
    Object.keys(recededObj).forEach((key) => {
      expect(savedNote[key]).toEqual(recededObj[key]);
    });
  });
  it('get all data if called callAll()', async () => {
    notesObj.save(sendObject);
    const allData = await notesObj.callAll();
    expect(allData.length).toEqual(1);
  });
  it('get array if the category was saved in DB', async () => {
    const testObj = { action: 'list', payload: 'school' };
    const all = await notesObj.callCategory(testObj);
    expect(all.length).toEqual(2);
  });
  it('get Empty array if the category was not saved in DB', async () => {
    const testObj = { action: 'list', payload: 'wow' };
    const all = await notesObj.callCategory(testObj);
    expect(all).toEqual([]);
  });
  it('the document will be deleted if the id was passed correctly', async () => {
    const savedNote = await notesObj.save(sendObject);
    const deletedData = await notesObj.deleteItem(savedNote);
    expect(deletedData.deletedCount).toEqual(1);
  });
  it('delete count return 0 if the id is wrong', async () => {
    const passedObject = {
      action: 'delete',
      id: '5f86dd44b27e3e1',
    };
    const deletedData = await notesObj.deleteItem(passedObject);
    expect(deletedData).toBeUndefined();
  });
});
