const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  linkType: {
    type: String,
    required: [true],
  },
  startedAt: {
    type: Date,
    required: [true],
  },
  endedAt: {
    type: Date,
  },
  parent: {
    type: ObjectId,
    required: [true],
  },
  child: {
    type: ObjectId,
    required: [true],
  },
  tags: {
    type: [String],
  },
  createdAt: {
    type: Date,
    required: [true],
  },
  createdBy: {
    type: ObjectId,
  },
  modifiedAt: {
    type: Date,
    required: [true],
  },
  modifiedBy: {
    type: ObjectId,
  }
});

module.exports = { schema };