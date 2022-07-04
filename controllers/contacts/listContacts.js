const { Contact } = require("../../models/contact");

const listContacts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite = true } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({
    owner,
    favorite,
    skip,
    limit: Number(limit),
  }).populate("owner", "email name");
  res.json(result);
};

module.exports = listContacts;
