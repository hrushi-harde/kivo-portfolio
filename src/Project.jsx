import React from 'react'
import p1 from '../src/assets/e-commerce.png'
import p2 from '../src/assets/game.png'
import p3 from '../src/assets/chat.png'
import p4 from '../src/assets/dashboard.png'
import p5 from '../src/assets/portfolio.png'
import p6 from '../src/assets/mobile.png'

function Project() {
  const project = [
    {
      id:1, 
      image:p1, 
      link:"https://stationarystoreapp.netlify.app/", 
      title:"E-Commerce Platform",
      description:"A fully responsive online store with seamless checkout, inventory management, and user-friendly interface."
    },
    {
      id:2, 
      image:p6, 
      link:"https://uizard.io/templates/mobile-app-templates/", 
      title:"Mobile App Prototype",
      description:"A prototype mobile application demonstrating UX/UI design and functional features for client testing."
    },
    {
      id:3, 
      image:p3, 
      link:"https://quillbot.com/ai-chat?utm_medium=cpc&utm_source=google&utm_campaign=FA+-+SMA+|+AWAR+-+Search+|+Product+-+AI+Chat+|+DEVP+|+CPA&utm_term=ai%20chatbot&utm_content=751431825269&campaign_type=search-22533445377&click_id=CjwKCAjwlOrFBhBaEiwAw4bYDW-U1pkKm2OO58_o_fxIgfKVBcodfTCdl30fgXjxWW_0JY2hfWqGTRoCNy8QAvD_BwE&campaign_id=22533445377&adgroup_id=178083665166&ad_id=751431825269&keyword=ai%20chatbot&placement=&target=&network=g&gad_source=1&gad_campaignid=22533445377&gbraid=0AAAAACZsE3xwH542FWgDgNxazQiAGZYxM&gclid=CjwKCAjwlOrFBhBaEiwAw4bYDW-U1pkKm2OO58_o_fxIgfKVBcodfTCdl30fgXjxWW_0JY2hfWqGTRoCNy8QAvD_BwE", 
      title:"AI Chatbot Prototype",
      description:"A conversational AI bot integrated with NLP capabilities to assist users and improve customer support."
    },
    {
      id:4, 
      image:p4, 
      link:"https://dribbble.com/tags/business-analytics-dashboard", 
      title:"Business Analytics Dashboard",
      description:"An intuitive dashboard providing real-time analytics and insights for data-driven business decisions."
    },
    {
      id:5, 
      image:p5, 
      link:"https://darkleas.github.io/company-website-reactjs/", 
      title:"Portfolio Website",
      description:"A sleek, responsive portfolio website showcasing projects, skills, and achievements for clients and partners."
    },

    {
      id:6, 
      image:p2, 
      link:"https://tic-tac-toe-eight-phi-68.vercel.app/", 
      title:"Interactive Game App",
      description:"A fun and interactive web game designed to enhance engagement and provide entertainment across devices."
    },
  ]
  
  return (
    <div className='bg-gray-900 text-white py-16 px-6 md:px-16'>
        <div className='text-center max-w-6xl mx-auto '>
            <span className='px-4 py-1 border border-gray-200 text-cyan-500 text-bold rounded-full'>PROJECTS</span>
            <h2 className='text-3xl font-bold mt-2'>Explore Our Featured Projects</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10'>
          {project.map((project,index)=>(
            <div key={index} className='relative group'>
              <img src={project.image} alt={project.title} className='rounded-lg transition-transform duration-300 transform group-hover:scale-105'/>
              <a href={project.link} target='_blank' className='absolute inset-0 flex flex-col items-center justify-center bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 text-white text-center px-4'>
                <span className='text-2xl font-bold underline'>{project.title}</span>
                <p className='mt-2 text-sm'>{project.description}</p>
              </a>
            </div>
          ))}
        </div>
        <div className='text-center mt-10'>
          <button className='mt-6 py-1 px-4 bg-cyan-500 text-black rounded-full font-bold'>View All Projects</button>
        </div>
    </div>
  )
}

export default Project
