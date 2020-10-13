'use strict';

const mongoose = require('mongoose');
const NotesObj = require('./notes-schema');
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

class Db {
  constructor() {}

  async save(obj) {
    const newObj = {
      text: obj.payload,
      category: obj.category,
    };
    const newNote = new NotesObj(newObj);
    await newNote.save();
    console.log(`Note Saved: ${obj.payload}`);
    this.close();
  }

  async deleteItem(obj) {
    if (obj.id) {
      NotesObj.deleteOne({ _id: obj.id })
        .then(() => {
          console.log('deleted');
          this.close();
        })
        .catch((err) => {
          console.log(`
          This id ${obj.id} is wrong
          check ids : --list
        `);
          this.close();
        });
    } else {
      console.log(`please enter the id you want to delete
      --delete <Id for that note check ids from --list> 
      `);

      this.close();
    }
  }

  async callAll() {
    return await NotesObj.find({});
  }

  close() {
    mongoose.disconnect();
  }
}

module.exports = Db;
