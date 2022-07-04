const { createError } = require("../../helpers/createError");
const { User } = require("../../models/user");

const subUpdate = async (req, res) => {
  const { subscription } = req.body;
  const { _id } = req.user;
  if (!subscription) {
    throw createError(400, "missing field subscription");
  }
  await User.findByIdAndUpdate(_id, { subscription });
  res.json({
    subscription,
  });
};

module.exports = subUpdate;
