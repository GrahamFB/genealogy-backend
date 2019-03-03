const get = ({ Event }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const event = await Event.findOne({ _id });
    res.status(200).send({ event });
  } catch (error) {
    next(error);
  }
};

module.exports= { get };
