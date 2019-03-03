const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  eventType: {
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
  locatedAt: {
    type: ObjectId,
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