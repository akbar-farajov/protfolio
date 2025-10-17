"use server";

import { EmailTemplate } from "@/components/contact/email-template";
import { Resend } from "resend";

export async function sendEmail(formData: FormData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      return {
        success: false,
        error: "All fields are required",
      };
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return {
        success: false,
        error: "Email service is not configured",
      };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "akbarfarajov74@gmail.com",
      subject: `New message from ${name}`,
      react: await EmailTemplate({
        name: name as string,
        email: email as string,
        message: message as string,
      }),
    });

    if (error) {
      console.error("Failed to send email:", error);
      return {
        success: false,
        error: "Failed to send email. Please try again.",
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}
