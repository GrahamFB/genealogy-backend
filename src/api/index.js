const express = require('express');

const { errorHandler } = require('../middleware');

// list of models here
const { Question } = require('../models/question');
const { Event } = require('../models/event')
const { Link } = require('../models/link')

// list of controllers here
const questions = require('../controllers/questions');
const events = require('../controllers/events');
const links = require('../controllers/links');

// combine models ino one object
const models = { Question, Event, Link };

const routersInit = config => {
  const router = express();

  // register api points
  router.use('/questions', questions(models, { config }));
  router.use('/events', events(models, { config }));
  router.use('/links', links(models, { config }));

  // catch api all errors
  router.use(errorHandler);
  return router;
};

module.exports = routersInit;