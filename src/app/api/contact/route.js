import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      company,
      stage,
      service,
      message,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color:#333;">UBR Contact Form Submission</h2>

        <table style="border-collapse: collapse; width: 100%; margin-top: 20px;">
          <tr>
            <td style="border:1px solid #ddd; padding:10px;">
              <strong>Full Name</strong>
            </td>
            <td style="border:1px solid #ddd; padding:10px;">
              ${fullName}
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ddd; padding:10px;">
              <strong>Email</strong>
            </td>
            <td style="border:1px solid #ddd; padding:10px;">
              ${email}
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ddd; padding:10px;">
              <strong>Company / Brand</strong>
            </td>
            <td style="border:1px solid #ddd; padding:10px;">
              ${company}
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ddd; padding:10px;">
              <strong>Stage</strong>
            </td>
            <td style="border:1px solid #ddd; padding:10px;">
              ${stage}
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ddd; padding:10px;">
              <strong>Service</strong>
            </td>
            <td style="border:1px solid #ddd; padding:10px;">
              ${service}
            </td>
          </tr>

          <tr>
            <td style="border:1px solid #ddd; padding:10px;">
              <strong>Message</strong>
            </td>
            <td style="border:1px solid #ddd; padding:10px; white-space: pre-wrap;">
              ${message}
            </td>
          </tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: `"Zerror Studios" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
      to: [
        process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      ],
      subject: `UBR Contact Form Submission - ${fullName}`,
      html: htmlTemplate,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false }, { status: 500 });
  }
}