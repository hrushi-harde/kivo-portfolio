import React from 'react'
import { FaClock, FaGem, FaPaintBrush, FaPalette } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { FaBullhorn } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import Thank  from "./assets/thank.png";

function Services() {
    const services = [
        { 
            id: 1, 
            title: "Web Development",
            icon: <FaPaintBrush/>, 
            description: "Kivo develops fast, secure, and scalable websites tailored for your business, delivering an exceptional online experience to your users." 
        },             
        { 
            id: 2, 
            title: "Mobile App Development", 
            icon: <FaMobileAlt/>, 
            description: "We create intuitive and engaging mobile applications for iOS and Android that help your business reach customers on the go." 
        },
        { 
            id: 3, 
            title: "Digital Marketing", 
            icon: <FaBullhorn/>, 
            description: "Boost your brand's online presence with Kivo’s data-driven strategies including social media, content, and targeted campaigns." 
        },
        { 
            id: 4, 
            title: "UI/UX Design", 
            icon: <FaLaptopCode/>, 
            description: "We craft user-friendly and visually stunning interfaces that enhance customer experience and ensure your product stands out." 
        },
        { 
            id: 5, 
            title: "Business Consulting", 
            icon: <FaChartLine/>, 
            description: "Kivo provides expert consulting to optimize processes, reduce costs, and help your business achieve long-term success." 
        },
        { 
            id: 6, 
            title: "SEO Services", 
            icon: <FaSearch/>, 
            description: "Improve your search visibility and drive traffic with Kivo’s advanced SEO techniques and optimization strategies." 
        },
      ];

    const services1 = [
        {
            icon: <FaClock/>,
            title: "On-Time Delivery",
            description: "Kivo ensures timely project delivery without compromising on quality, keeping your business on track and ahead of deadlines."
        },
        {
            icon: <FaPalette/>,
            title: "Creative Solutions",
            description: "Our team combines creativity with technology to deliver unique, innovative solutions that make your brand shine." 
        },
        {
            icon: <FaGem/>,
            title: "Quality Assurance",
            description: "Every project undergoes rigorous testing to guarantee optimal performance, security, and an outstanding user experience."
        }, 
    ]

    return (
        <>
        <div className='bg-gray-900 text-white py-16 px-8'>
            <div className='text-center max-w-6xl mx-auto '>
                <span className='px-4 py-1 border border-gray-200 text-cyan-500 text-bold rounded-full '>SERVICES</span>
                <h2 className='text-3xl font-bold mt-2'>Explore Our Premium Services at Kivo</h2>
            </div>
            <div className='grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10'>
            {services.map( (service,index) =>(
                <div key={index} className='group relative bg-black p-6 border border-gray-200 hover:border-cyan-500 rounded-lg text-center overflow-hidden transition-all duration-30 ' >
                <div className='text-5xl flex text-center justify-center text-cyan-500 group-hover:translate-y[-40px] opacity-100 group-hover:opacity-0 transition-all duration-300'>{service.icon} </div>
                <div className='transition-all duration-300 group-hover:translate-y-[-40px]'>
                    <h3 className='text-xl font-bold mt-3'>{service.title}</h3>
                    <p className='text-gray-400 text-lg mt-2 max-w-[300px] mx-auto'>{service.description}</p>
                </div>
                <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                    <a className='px-4 py-1 border border-gray-200 text-cyan-500 text-bold rounded-full'>View Detail</a>
                </div>
                 </div>
            ))}
            </div>
        </div>
        <section className='py-16 px-6 bg-black text-white md:px-16'>
            <div className='max-w-6xl flex mx-auto flex-col md:flex-row items-center gap-12'>
                <div className='w-full md:w-1/2'>
                    <button className='px-4 py-1 border border-gray-200 text-cyan-500 text-bold rounded-full mt-0 ms-43 md: text-center'>WHY US?</button>
                    <h2 className='text-4xl font-bold mb-6 mt-6'>Why Clients Choose Kivo</h2>
                    
                    <div className='space-y-6'>
                        {services1.map((ser,index)=>( 
                            <div key={index} className='flex items-start gap-4'> 
                            <div className='text-cyan-500 text-4xl'>{ser.icon}</div>
                            <div>
                                <h3 className='text-lg font-bold'>{ser.title}</h3>
                                <p className='text-gray-400 text-sm max-w-[350px]'>{ser.description}</p>
                            </div>
                            </div>
                        ))}
                  </div>
                </div>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <img src={Thank} alt="thank-you" className='rounded-lg shadow-lg h-100 mt-6'/>
                </div>
            </div>
        </section>
        </>
    )
}

export default Services
