"use server"
import sql from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function registerUser(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  
  // Ek unique Receipt ID generate karna (e.g., AT-B7X92K)
  const receiptId = `AT-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

  try {
    // NeonDB mein data insert karna
    await sql`
      INSERT INTO registrations (user_name, user_email, receipt_id)
      VALUES (${name}, ${email}, ${receiptId})
    `;

    // Page ko refresh karna taaki "Slots Left" update ho jayein
    revalidatePath("/register-competition");

    return { success: true, receiptId };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, error: "Database registration failed." };
  }
}