import React, { useRef, useState } from 'react';
import { FiX, FiMenu } from "react-icons/fi";
import About from './About';
import Project from './Project';
import Services from './Services';
import Test from './Test'; // Testimonials component
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';

// ContactUs component
function ContactUs() {
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

        toast.success('Message sent successfully!', { duration: 4000 });

        setFormData({ name: '', email: '', message: '' });
    }

    return (
        <section className='bg-black text-white py-16 px-6 md:px-16'>
            <Toaster />
            <div className='max-w-3xl mx-auto text-center'>
                <span className='mt-6 py-2 px-6 bg-cyan-500 text-black rounded-full font-bold'>CONTACT US</span>
                <h2 className='text-3xl font-bold mt-4'>Get in Touch with Kivo</h2>
                <p className='text-gray-400 mt-2'>We’d love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.</p>

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

// Home component
function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Refs
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const testimonialsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    }

    return (
        <div className='bg-black text-white'>
            <nav className='fixed top-0 w-full flex justify-between items-center px-10 py-5 bg-black/80 z-50 backdrop-blur-sm'>
                <h1 className='font-bold text-4xl'>Kivo</h1>

                <div className='hidden md:flex space-x-6'>
                    <button onClick={() => scrollToSection(homeRef)} className='text-lg hover:text-cyan-500 cursor-pointer'>Home</button>
                    <button onClick={() => scrollToSection(aboutRef)} className='text-lg hover:text-cyan-500 cursor-pointer'>About</button>
                    <button onClick={() => scrollToSection(projectsRef)} className='text-lg hover:text-cyan-500 cursor-pointer'>Projects</button>
                    <button onClick={() => scrollToSection(testimonialsRef)} className='text-lg hover:text-cyan-500 cursor-pointer'>Testimonials</button>
                    <button onClick={() => scrollToSection(contactRef)} className='px-4 py-2 border border-cyan-500 rounded-full cursor-pointer'>Contact Us</button>
                </div>

                <button className='md:hidden text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                {menuOpen && (
                    <div className='absolute top-16 right-5 w-40 bg-gray-900 rounded-lg shadow-lg flex flex-col items-center py-4 space-y-4 md:hidden'>
                        <button onClick={() => scrollToSection(homeRef)} className='hover:text-cyan-500'>Home</button>
                        <button onClick={() => scrollToSection(aboutRef)} className='hover:text-cyan-500'>About</button>
                        <button onClick={() => scrollToSection(projectsRef)} className='hover:text-cyan-500'>Projects</button>
                        <button onClick={() => scrollToSection(testimonialsRef)} className='hover:text-cyan-500'>Testimonials</button>
                        <button onClick={() => scrollToSection(contactRef)} className='px-4 py-2 border border-cyan-500 rounded-full'>Contact Us</button>
                    </div>
                )}
            </nav>

            {/* Sections */}
            <div ref={homeRef} className='min-h-screen flex flex-col items-center justify-center text-center px-6'>
                <p className='uppercase text-sm tracking-wide bg-black border border-gray-200 text-cyan-500 font-bold px-3 py-1 rounded-full inline-block'>
                    Innovating the Future
                </p>
                <h1 className='text-5xl md:text-6xl font-extrabold mt-4'>Building Smarter Solutions <br />For a Digital World</h1>
                <p className='text-gray-400 mt-4 max-w-lg mx-auto'>
                    At <span className="text-cyan-500 font-semibold">Kivo</span>, we specialize in cutting-edge technology, 
                    delivering AI-driven, cloud-based, and digital transformation solutions 
                    that help businesses scale, innovate, and succeed globally.
                </p>
                <button className='mt-6 py-2 px-6 bg-cyan-500 text-black rounded-full font-bold'>Get Started</button>
            </div>

            <div ref={aboutRef}><About /></div>
            <div ref={projectsRef}><Project /></div>
            <div ref={testimonialsRef}><Services /></div>
            <div ref={contactRef}><ContactUs /></div>
        </div>
    )
}

export default Home;
