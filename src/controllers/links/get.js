const get = ({ Link }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const link = await Link.findOne({ _id });
    res.status(200).send({ link });
  } catch (error) {
    next(error);
  }
};

module.exports= { get };
