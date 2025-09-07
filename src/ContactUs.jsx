import React, { useState } from 'react';
import Swal from 'sweetalert2';

// Change to default export
export default function ContactUs() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Success!',
            text: "Your message has been sent.",
            icon: 'success',
            confirmButtonColor: '#06b6d4',
            confirmButtonText: 'OK'
        });

        setFormData({ name: '', email: '', message: '' });
    }

    return (
        <section className='bg-black text-white py-16 px-6 md:px-16'>
            <div className='max-w-3xl mx-auto text-center'>
                <span className='mt-6 py-2 px-6 bg-cyan-500 text-black rounded-full font-bold'>CONTACT US</span>
                <h2 className='text-3xl font-bold mt-4'>Get in Touch with Kivo</h2>
                <p className='text-gray-400 mt-2'>We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>

                <form onSubmit={handleSubmit} className='mt-8 flex flex-col gap-4'>
                    <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Your Name' className='bg-gray-900 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-500' required />
                    <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Your Email' className='bg-gray-900 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-500' required />
                    <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Your Message' rows='5' className='bg-gray-900 text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-500' required />
                    <button type='submit' className='mt-2 py-2 px-6 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-all duration-300'>Send Message</button>
                </form>
            </div>
        </section>
    )
}