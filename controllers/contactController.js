const asyncHandler = require("express-async-handler");

const getAllContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get All contacts" });
});

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get All contacts" });
});

const createNewcontact = asyncHandler(async (req, res) => {
  console.log("The created contact is: ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fileds are mandatory");
  }
  res.status(201).json({ message: `Created a new contact` });
});

const updateNewContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated a new contact ${req.body}` });
});

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Deleted a new contact" });
});

module.exports = {
  getAllContacts,
  getContact,
  createNewcontact,
  updateNewContact,
  deleteContact,
};
