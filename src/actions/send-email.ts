"use server";

import { createClient } from "@/lib/supabase/server";

export async function sendEmail(formData: FormData) {
  const supabase = await createClient();
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const { data, error } = await supabase.from("contact_messages").insert({
      name: name as string,
      email: email as string,
      message: message as string,
    });

    if (error) {
      console.error("Error sending email:", error);
      return {
        success: false,
        error: "Failed to send email. Please try again.",
      };
    }
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}
