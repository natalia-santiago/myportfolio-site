import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const businessName = body.businessName?.trim() || "Not provided";
    const website = body.website?.trim() || "Not provided";
    const service = body.service?.trim() || "Not selected";
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "Portfolio Contact <onboarding@resend.dev>";

    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!toEmail) {
      return NextResponse.json(
        { error: "Missing CONTACT_TO_EMAIL" },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Business Name:</strong> ${businessName}</p>
          <p><strong>Current Website:</strong> ${website}</p>
          <p><strong>Service Needed:</strong> ${service}</p>

          <hr style="margin: 24px 0;" />

          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Business Name: ${businessName}
Current Website: ${website}
Service Needed: ${service}

Message:
${message}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong while sending your message." },
      { status: 500 }
    );
  }
}