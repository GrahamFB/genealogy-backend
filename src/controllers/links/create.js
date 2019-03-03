const { NotAcceptable } = require('rest-api-errors');
const { sendOne } = require('../../middleware');
const _ = require('lodash');

const create = ({ Link }, { config }) => async (req, res, next) => {
  try {
    const link = new Link();
    /*if (!req.body.title) {
      throw new NotAcceptable(405, 'Should by title}');
    }*/
    _.extend(link, req.body);
    await link.save();

    return sendOne(res, { link });
  } catch (error) {
    next(error);
  }
};

module.exports= { create };
