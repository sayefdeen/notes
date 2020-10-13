'use strict';

const mongoose = require('mongoose');
const notes = mongoose.Schema({
  text: { type: 'string', require: true },
  category: { type: 'string', require: true },
});

module.exports = mongoose.model('notes', notes);
