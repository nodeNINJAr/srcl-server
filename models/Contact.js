const mongoose = require("mongoose");

// Define the schema for the contact data
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"], // Name is mandatory
      trim: true, // Removes extra spaces
    },
    email: {
      type: String,
      required: [true, "Email is required"], // Email is mandatory
      trim: true,
      lowercase: true, // Converts email to lowercase
      match: [/.+\@.+\..+/, "Please enter a valid email address"], // Validates email format
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"], // Phone number is mandatory
      trim: true,
      match: [/^\d{11}$/, "Please enter a valid 11-digit phone number"], // Validates phone number format
    },
    whatsappNumber: {
      type: String,
      trim: true,
      match: [/^\d{11}$/, "Please enter a valid 11-digit WhatsApp number"], // Validates WhatsApp number format
    },
    message: {
      type: String,
      required: [true, "Message is required"], // Message is mandatory
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

// Create the Mongoose model
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;