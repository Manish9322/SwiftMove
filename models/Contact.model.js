const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
    },
    reason: {
      type: String,
      required: [true, "Reason for contacting is required"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
    status: {
      type: String,
      enum: ["New", "Read", "Responded"],
      default: "New",
    },
  },
  { timestamps: true }
);

const ContactModel =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

module.exports = ContactModel;
