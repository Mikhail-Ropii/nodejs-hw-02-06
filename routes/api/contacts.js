const express = require("express");
const ctrl = require("../../controlles/contacts");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const { validation, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getContactById));

router.post("/", validation(schemas.add), ctrlWrapper(ctrl.addContact));

router.patch(
  "/:contactId/favorite",
  isValidId,
  //   validation(schemas.updateFavorite),
  ctrlWrapper(ctrl.updateStatusContact)
);

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  isValidId,
  validation(schemas.add),
  ctrlWrapper(ctrl.updateContact)
);

module.exports = router;
