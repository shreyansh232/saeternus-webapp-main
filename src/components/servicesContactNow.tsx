'use client';
import React, { useState } from 'react';

const ContactUsSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to an API
    console.log({ name, email, subject, message });
    setSubmitted(true);
    // Reset form fields after submission
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className='flex flex-col items-center rounded-3xl bg-gray-100 p-12 shadow-md'>
      <h2 className='text-3xl font-bold text-violet-600'>Contact Us</h2>
      <p className='mt-4 text-center text-lg text-gray-600'>
        We would love to hear from you! Please fill out the form below and we
        will get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit} className='mt-8 w-full max-w-md'>
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-violet-500'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-violet-500'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='subject'
            className='block text-sm font-medium text-gray-700'
          >
            Subject
          </label>
          <input
            type='text'
            id='subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-violet-500'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-700'
          >
            Message
          </label>
          <textarea
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className='mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-violet-500'
          />
        </div>
        <button
          type='submit'
          className='mt-4 w-full rounded-md bg-violet-600 py-2 text-white hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-500'
        >
          Send Message
        </button>
      </form>
      {submitted && (
        <p className='mt-4 text-green-600'>
          Thank you for your message! We will get back to you soon.
        </p>
      )}
    </section>
  );
};

export default ContactUsSection;
