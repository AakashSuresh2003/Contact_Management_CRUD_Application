const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  getContact,
  createNewcontact,
  updateNewContact,
  deleteContact,
} = require("../controllers/contactController");

router.get("/", getAllContacts);

router.get("/:id", getContact);

router.post("/", createNewcontact);

router.put("/:id", updateNewContact);

router.delete("/:id", deleteContact);

module.exports = router;
