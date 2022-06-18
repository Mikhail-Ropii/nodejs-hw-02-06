const { createError } = require("../../helpers/createError");
const contacts = require("../../models/contacts");
const { addShema } = require("../../shemas/contacts");

const updateContact = async (req, res, next) => {
  const { error } = addShema.validate(req.body);
  if (error) {
    throw createError(400, "missing required name field");
  }
  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, req.body);
  res.json(result);
};

module.exports = updateContact;
