const _ = require('lodash');

const update = ({ Event }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const event = await Event.findOne({ _id });
    _.extend(event, req.body);
    await event.save();
    res.status(200).send({ event });
  } catch (error) {
    next(error);
  }
};

module.exports= { update };
