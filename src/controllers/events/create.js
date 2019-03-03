const { NotAcceptable } = require('rest-api-errors');
const { sendOne } = require('../../middleware');
const _ = require('lodash');

const create = ({ Event }, { config }) => async (req, res, next) => {
  try {
    const event = new Event();
    /*if (!req.body.title) {
      throw new NotAcceptable(405, 'Should by title}');
    }*/
    _.extend(event, req.body);
    await event.save();

    return sendOne(res, { event });
  } catch (error) {
    next(error);
  }
};

module.exports= { create };
