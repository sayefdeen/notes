'use strict';

const { v4: uuidv4 } = require('uuid');
require('dotenv').config();
const mongoose = require('mongoose');
const NotesObj = require('./models/schema');
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

class Notes {
  constructor() {}

  async execute(obj) {
    const validation = /a|add|list|delete/i;
    if (validation.test(obj.action)) {
      if (obj.payload && obj.category) {
        const newObj = {
          text: obj.payload,
          category: obj.category,
        };
        const newNote = new NotesObj(newObj);
        await newNote.save();
        console.log(`Note Saved: ${obj.payload}`);
        this.close();
      } else if (obj.action === 'list') {
        this.callAll().then((result) => {
          result.forEach((item) => {
            this.renderData(item);
          });
          this.close();
        });
      } else if (obj.action === 'delete') {
        this.deleteItem(obj);
      } else {
        this.emptyMessageError();
      }
    } else {
      this.errorMessage(obj);
    }
  }

  add(obj) {
    let id = uuidv4();
    console.log({
      noteID: id,
      text: obj.payload,
    });
  }

  close() {
    mongoose.disconnect();
  }

  renderData(user) {
    console.log(`
      ${user.text}
      Category: ${user.category}  ID: ${user.id}
    `);
  }

  async callAll() {
    return await NotesObj.find({});
  }

  async deleteItem(obj) {
    console.log(obj.id);
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
        });
    } else {
      console.log(`please enter the id you want to delete
      --delete <Id for that note check ids from --list> 
      `);

      this.close();
    }
  }

  emptyMessageError() {
    console.log(`
      Please Add your Note correctly
      --add "Enter your note here" --category <category>
    `);
    this.close();
  }

  errorMessage(obj) {
    console.log(`
            Entered action was ${obj.action}
            We don't know what are trying to do?
            Ideal calling are like this : 
            add a new note use this: 
            --add "Enter your note here" --category <category>
            See all you notes
            --list
            Delete a note
            --delete <Id for that note check ids from --list> 
        `);
    this.close();
  }
}
module.exports = Notes;
