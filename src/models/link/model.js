const mongoose = require('mongoose');
const { schema } = require('./schema');
const Link = mongoose.model('Link', schema);


module.exports = { Link };