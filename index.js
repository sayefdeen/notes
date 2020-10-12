'use strict';

const Input = require('./lib/input');
const Notes = require('./lib/notes');

const createdObj = new Input();
const notesObject = new Notes();
createdObj.valid() ? notesObject.execute(createdObj) : errorMessage(createdObj);

function errorMessage(obj) {
  console.log(`
        Entered action was ${obj.action}
        Entered message should be a string only and not empty
        Ideal calling is like this :
        --add "Enter you message here" 
    `);
}

// I have worked on this exapmle
// --add "This is a really cool thing that I wanted to remember for later"
