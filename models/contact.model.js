const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the contact name..."],
    },
    email: {
      type: String,
      required: [true, "Please add the email..."],
      unique: [true, "Email address is already taken"],
    },
    phone: {
      type: String,
      required: [true, "Please add the Phone number..."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact",contactSchema);