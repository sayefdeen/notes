'use strict';

const mongoose = require('mongoose');
const NotesObj = require('./notes-schema');

class Db {
  constructor() {}

  async save(obj) {
    const newObj = {
      text: obj.payload,
      category: obj.category,
    };
    const newNote = new NotesObj(newObj);
    console.log(`Note Saved: ${obj.payload}`);
    return await newNote.save();
  }

  async deleteItem(obj) {
    if (!obj.id) {
      console.log(`please enter the id you want to delete
      --delete <Id for that note check ids from --list> 
      `);
    }
    try {
      const deleted = await NotesObj.deleteOne({ _id: obj.id });
      return deleted;
    } catch (e) {
      return undefined;
    }
  }

  async callAll(obj) {
    return await NotesObj.find(obj);
  }
  async callCategory(obj) {
    return await NotesObj.find({ category: obj.payload });
  }

  close() {
    mongoose.disconnect();
  }
}

module.exports = Db;
