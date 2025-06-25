import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate required fields
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Create a transporter object using the same configuration as the contact form
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content for the administrator
    const adminMailOptions = {
      from: process.env.EMAIL_FROM || "your-email@example.com",
      to: process.env.EMAIL_TO || "recipient@example.com",
      subject: `New Newsletter Subscription`,
      html: `
        <h3>New Newsletter Subscription</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p>This user has subscribed to receive updates on new tools, success stories, and entrepreneurship tips.</p>
      `,
    };

    // Email content for the subscriber (confirmation)
    const subscriberMailOptions = {
      from: process.env.EMAIL_FROM || "your-email@example.com",
      to: email,
      subject: `Welcome to AI-EntrepreNova Newsletter!`,
      html: `
        <h2>Thank you for subscribing!</h2>
        <p>You're now subscribed to the AI-EntrepreNova newsletter.</p>
        <p>You'll receive updates on new tools, success stories, and entrepreneurship tips to help your rural business thrive.</p>
        <p>If you have any questions, feel free to <a href="${
          process.env.NEXT_PUBLIC_SITE_URL || "https://your-site.com"
        }/contact">contact us</a>.</p>
        <p>Best regards,<br>The AI-EntrepreNova Team</p>
      `,
    };

    // Send the emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(subscriberMailOptions);

    return NextResponse.json(
      { success: "You've been successfully subscribed to our newsletter!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in newsletter API route:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}
