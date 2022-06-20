const { createError } = require("../../helpers/createError");
const contacts = require("../../service/contacts");
const { addShema } = require("../../shemas/contacts");

const addContact = async (req, res, next) => {
  const { error } = addShema.validate(req.body);
  if (error) {
    throw createError(400, "missing required name field");
  }
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

module.exports = addContact;
