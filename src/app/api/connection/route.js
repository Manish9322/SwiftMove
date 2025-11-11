import _db from "../../../lib/db";

export async function GET() {
  try {
    // Attempt to connect to the database
    await _db();
    
    return new Response(JSON.stringify({ message: "Database connection successful" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database connection test failed:", error);
    return new Response(JSON.stringify({ error: "Database connection failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
