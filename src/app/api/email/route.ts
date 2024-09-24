import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const body = await request.json();

  console.log('Request Body:', body);

  const { email, name, number, subject, message, route, program } = body;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const recipient =
    route === '/admissions-consulting'
      ? 'admissions@saeternus.com'
      : 'hello@saeternus.com';

  const emailText =
    route === '/admissions-consulting'
      ? `Name: ${name}\nProgram: ${program}\nNumber: ${number}\nEmail: ${email}\n`
      : `Name: ${name}\nNumber: ${number}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

  const mailOptions: Mail.Options = {
    from: 'noreply@saeternus.com',
    to: recipient,
    subject: `Query from ${name} - ${route === 'admissions-consulting' ? 'Admissions Consulting' : 'General Inquiry'}`,
    cc: email,
    text: emailText,
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
