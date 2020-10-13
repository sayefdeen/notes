'use strict';

const Input = require('./lib/input');
const Notes = require('./lib/notes');

const createdObj = new Input();
const notesObject = new Notes();
notesObject.execute(createdObj);

// I have worked on this exapmle
// --add "This is a really cool thing that I wanted to remember for later"
// --add "this is fun" --category school
// --list
// --delete <id for the note>
