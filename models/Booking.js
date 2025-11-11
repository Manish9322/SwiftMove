const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
    },
    pickupLocation: {
      type: String,
      required: true,
      trim: true,
    },
    destination: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "In-progress", "Completed", "Cancelled"],
      default: "Pending",
    },
    porterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Porter",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const BookingModel =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
module.exports = BookingModel;
