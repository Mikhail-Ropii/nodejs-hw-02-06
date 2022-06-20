const contacts = require("../../service/contacts");

const listContacts = async (req, res, next) => {
  const result = await contacts.listContacts();
  res.json(result);
};

module.exports = listContacts;
