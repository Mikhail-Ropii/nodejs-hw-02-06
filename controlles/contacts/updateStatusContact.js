const { Contact } = require("../../models/contact");
const { createError } = require("../../helpers/createError");

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;
  if (!Object.keys(req.body).length) {
    throw createError(400, "missing field favorite");
  }
  const result = await Contact.findByIdAndUpdate(contactId, req.body);
  res.json(result);
};

module.exports = updateStatusContact;
