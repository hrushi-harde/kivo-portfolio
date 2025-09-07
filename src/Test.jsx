import React from 'react'
import { motion } from 'framer-motion'

function Test() {
    const testimonials = [
        {
            id:1,
            name:"Pankaj Rai", 
            role:"CEO, Tech Solutions Inc.", 
            image:"https://avatar.iran.liara.run/public/10", 
            review:"Kivo transformed our digital strategy with innovative solutions. Their team is highly skilled, responsive, and delivered exactly what we needed on time."
        },
        {
            id:2,
            name:"Anjali Sinha", 
            role:"CTO, FutureWare", 
            image:"https://avatar.iran.liara.run/public/90", 
            review:"The expertise Kivo brought to our project was outstanding. Their web and mobile solutions enhanced our user experience and operational efficiency."
        },
        {
            id:3,
            name:"Poonam Shok", 
            role:"Product Manager, NexaCorp", 
            image:"https://avatar.iran.liara.run/public/85", 
            review:"Kivo's team is professional, creative, and highly collaborative. They helped us achieve our project goals while providing insightful guidance throughout."
        },
        {
            id:4,
            name:"Kiran Harde", 
            role:"Founder, InnovateX", 
            image:"https://avatar.iran.liara.run/public/9", 
            review:"Working with Kivo was seamless. Their innovative approach and technical expertise resulted in a product that exceeded our expectations."
        },
        {
            id:5,
            name:"Arjun Das", 
            role:"Head of Marketing, CloudWave", 
            image:"https://avatar.iran.liara.run/public/37", 
            review:"Kivo's solutions boosted our online presence and engagement significantly. Their team truly understands technology and business needs."
        },
        {
            id:6,
            name:"Sakshi Khurana", 
            role:"Lead Developer, BrightTech", 
            image:"https://avatar.iran.liara.run/public/85", 
            review:"Professional, reliable, and innovative—Kivo consistently delivered high-quality results that helped scale our projects efficiently."
        },
    ]
    
    const textData = [...testimonials, ...testimonials, ...testimonials]

    return (
        <div className='bg-black text-white py-16 overflow-hidden'>
            <h3 className='text-4xl font-bold text-center mb-8'>What Our Clients Say About Us</h3>
            <div className='relative flex justify-center'>
                <motion.div
                    className="flex space-x-6"
                    initial={{ x: "0%" }}
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        ease: "linear",
                        duration: 60,
                        repeat: Infinity,
                        repeatDelay: 3,
                    }}
                >
                    {textData.map((t, index) => (
                        <motion.div 
                            key={index} 
                            className='bg-gray-800 p-4 rounded-lg shadow-md w-80 flex-shrink-0 cursor-pointer'
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.5)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className='flex items-center space-x-3'>
                                <img src={t.image} alt={t.name} className='w-12 h-12 object-cover rounded-full'/>
                                <div>
                                    <h3 className='font-bold text-lg'>{t.name}</h3>
                                    <p className='text-sm text-gray-400'>{t.role}</p>
                                </div>
                            </div>
                            <p className='mt-3 text-gray-300 text-sm'>{t.review}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Test
