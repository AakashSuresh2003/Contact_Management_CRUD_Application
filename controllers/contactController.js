const asyncHandler = require("express-async-handler");
const Contact = require("../models/contact.model");

const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

const getContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

const createNewcontact = asyncHandler(async (req, res) => {
  console.log("The created contact is: ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fileds are mandatory");
  }
  const newContact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(201).json(newContact);
});

const updateNewContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  const { id } = req.params;
  if (!id) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updateContact = await Contact.findByIdAndUpdate(id, {
    name,
    email,
    phone,
  });

  if (updateContact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User Don't have permission to update other user contacts");
  }

  if (!updateContact) {
    res.status(404);
    throw new Error("Contact is not updated");
  }
  res.status(200).json(updateContact);
});

const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(404);
    throw new Error("Contact not found");
  }
  
  const data = await Contact.findByIdAndDelete(id);
  
  console.log("Deleted contact data:", data);
  if (!data) {
    res.status(404);
    throw new Error("Error deleting the Contact");
  }
  
  res.status(200).json(data);
});

module.exports = {
  getAllContacts,
  getContact,
  createNewcontact,
  updateNewContact,
  deleteContact,
};
