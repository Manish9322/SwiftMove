import _db from "../../../lib/db";
import BookingModel from "../../../../models/Booking.model.js";

// Establish MongoDB connection once at startup
_db();

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      const booking = await BookingModel.findById(id).lean();
      if (!booking) {
        return new Response(JSON.stringify({ error: "Booking not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify(booking), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      const bookings = await BookingModel.find().sort({ createdAt: -1 }).lean();
      return new Response(JSON.stringify(bookings), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch bookings" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const { customerName, pickupLocation, destination, date, time, userId } = data;

    if (!customerName || !pickupLocation || !destination || !date || !time || !userId) {
      return new Response(
        JSON.stringify({ error: "All booking fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const newBooking = new BookingModel({
      customerName,
      pickupLocation,
      destination,
      date,
      time,
      userId,
    });

    await newBooking.save();

    return new Response(
      JSON.stringify({
        message: "Booking created successfully",
        data: newBooking,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error creating booking:", error);
    return new Response(JSON.stringify({ error: "Failed to create booking" }), {
      status: 500, headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(request) {
  try {
    const data = await request.json();
    const { _id, ...updateData } = data;

    if (!_id) {
      return new Response(
        JSON.stringify({
          error: "_id is required for updating",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const updatedBooking = await BookingModel.findByIdAndUpdate(
      _id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedBooking) {
      return new Response(JSON.stringify({ error: "Booking not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        message: "Booking updated successfully",
        data: updatedBooking,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error updating booking:", error);
    return new Response(JSON.stringify({ error: "Failed to update booking" }), {
      status: 500, headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(request) {
  try {
    const { _id } = await request.json();

    if (!_id) {
      return new Response(JSON.stringify({ error: "_id is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const deletedBooking = await BookingModel.findByIdAndDelete(_id);

    if (!deletedBooking) {
      return new Response(JSON.stringify({ error: "Booking not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ message: "Booking deleted successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error deleting booking:", error);
    return new Response(JSON.stringify({ error: "Failed to delete booking" }), {
      status: 500, headers: { "Content-Type": "application/json" },
    });
  }
}
