import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, number, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: 'noreply@saeternus.com',
    to: 'hello@saeternus.com',
    subject: `Query from ${name}`,
    cc: email,
    text: `Name: ${name}\nNumber: ${number}\nEmail: ${email}\nMessage: ${message}`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Submitted');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({
      status: 'success',
      message: 'Form submitted successfully. We will get back to you shortly.',
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: 'error',
        message:
          'There was an error submitting the form. Please try again later.',
        error: err,
      },
      { status: 500 }
    );
  }
}
