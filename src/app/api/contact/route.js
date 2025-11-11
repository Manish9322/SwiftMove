import _db from "../../../lib/db";
import ContactModel from "../../../../models/Contact.model";

// Establish MongoDB connection
_db();

// Handler for GET requests to fetch all contact submissions
export async function GET() {
  try {
    const contacts = await ContactModel.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(contacts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch contacts" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Handler for POST requests to create a new contact submission
export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, reason, message } = data;

    if (!name || !email || !reason || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const newContact = new ContactModel({
      name,
      email,
      reason,
      message,
    });

    await newContact.save();

    return new Response(
      JSON.stringify({
        message: "Contact submission received successfully",
        data: newContact,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error creating contact submission:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create contact submission" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// Handler for PUT requests to update a contact submission's status
export async function PUT(request) {
    try {
        const { id, status } = await request.json();
        if (!id || !status) {
            return new Response(JSON.stringify({ error: "ID and status are required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const updatedContact = await ContactModel.findByIdAndUpdate(id, { status }, { new: true });
        if (!updatedContact) {
            return new Response(JSON.stringify({ error: "Contact not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }
        return new Response(JSON.stringify(updatedContact), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("Error updating contact:", error);
        return new Response(JSON.stringify({ error: "Failed to update contact" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

// Handler for DELETE requests to remove a contact submission
export async function DELETE(request) {
    try {
        const { id } = await request.json();
        if (!id) {
            return new Response(JSON.stringify({ error: "ID is required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const deletedContact = await ContactModel.findByIdAndDelete(id);
        if (!deletedContact) {
            return new Response(JSON.stringify({ error: "Contact not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }
        return new Response(JSON.stringify({ message: "Contact deleted successfully" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("Error deleting contact:", error);
        return new Response(JSON.stringify({ error: "Failed to delete contact" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
