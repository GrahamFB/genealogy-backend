const _ = require('lodash');

const update = ({ Link }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const link = await Link.findOne({ _id });
    _.extend(link, req.body);
    await link.save();
    res.status(200).send({ link });
  } catch (error) {
    next(error);
  }
};

module.exports= { update };
