import React from 'react'

function Extra() {
  return (
    <>
    <div className='bg-black text-white py-16'>
        <div className='relative bg-[#0d0f14] text-white py-16 px-8 rounded-2xl mx-4 md:mx-16 flex flex-col items-center text-center'>
           <div className='absolute inset-0'>
            <div className='absolute w-24 h-10 bg-gray-600/30 rotate-45 top-6 rounded-full left-10'></div>
             <div className='absolute w-36 h-10 bg-gray-600/30 -rotate-45 bottom-6 rounded-full right-10'></div>
             <div className='absolute w-12 h-10 bg-gray-600/30 -rotate-45 top-16 rounded-full right-24'></div>
             <div className='absolute w-16 h-10 bg-gray-600/30 rotate-45 bottom-10 rounded-full left-24'></div>
            </div>
            <h2 className='text-3xl md:text-5xl '>Let’s Build Innovative Solutions Together</h2>
            <p className='text-gray-400 text-sm md:text-base mt-4 max-w-xl'>
              At Kivo, we are passionate about turning ideas into impactful digital solutions. 
              Whether you’re looking to develop a website, a mobile app, or a full-stack platform, 
              our team is ready to collaborate and bring your vision to life. Let’s connect and create something extraordinary!
            </p>
        </div>
    </div>
    <footer className='bg-black text-white py-6 text-center'>
      <div className='container mx-auto px-4'>
         <p className='text-gray-400'>&copy; 2025 Kivo. All rights reserved.</p>
         <div className='flex justify-center space-x-4 mt-2 text-gray-400'>
            <a className='text-gray-400'>Privacy Policy</a>
            <a className='text-gray-400'>Terms & Services</a>
         </div>
      </div>
    </footer>
    </>
  )
}

export default Extra
