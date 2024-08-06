// /pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, services } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail password or app password
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'your-email@example.com', // Where you want to receive the emails
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Services: ${services}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
