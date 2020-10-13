'use strict';

const { v4: uuidv4 } = require('uuid');
require('dotenv').config();
const Db = require('./models/notes-collection');
const dataBaseColl = new Db();

class Notes {
  constructor() {}

  async execute(obj) {
    const validation = /a|add|list|delete/i;
    if (validation.test(obj.action)) {
      if (obj.payload && obj.category) {
        dataBaseColl.save(obj);
      } else if (obj.action === 'list') {
        dataBaseColl.callAll().then((result) => {
          result.forEach((item) => {
            this.renderData(item);
          });
          dataBaseColl.close();
        });
      } else if (obj.action === 'delete') {
        dataBaseColl.deleteItem(obj);
      } else {
        this.emptyMessageError();
      }
    }
  }

  add(obj) {
    let id = uuidv4();
    console.log({
      noteID: id,
      text: obj.payload,
    });
  }

  renderData(user) {
    console.log(`
      ${user.text}
      Category: ${user.category}  ID: ${user.id}
    `);
  }

  emptyMessageError() {
    console.log(`
      Please Add your Note correctly
      --add "Enter your note here" --category <category>
    `);
    dataBaseColl.close();
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
    dataBaseColl.close();
  }
}
module.exports = Notes;
