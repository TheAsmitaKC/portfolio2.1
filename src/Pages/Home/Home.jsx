import React from 'react'
import { Mail, SquareArrowOutUpRight  } from 'lucide-react';

const Home = () => {
  return (
    
    <div className='flex  h-[100vh] '>
        <div className='w-[20vw] border border-gray-100 pt-10 pl-5 '>
            <h1 className='font-bold text-xl ' >Sections</h1>
            <ul className='text-xm mt-3 mr-2 '>
                <li className='mb-3 bg-gray-100 font-bold  border-0 rounded-xl p-2 cursor-pointer ' >Introduction</li>
                <li className='mb-3 hover:bg-gray-100 hover:font-bold  border-0 rounded-xl p-2 cursor-pointer '>About Me</li>
                <li className='mb-3 hover:bg-gray-100 hover:font-bold border-0 rounded-xl p-2 cursor-pointer '>Projects</li>
                <li className='mb-3 hover:bg-gray-100 hover:font-bold  border-0 rounded-xl p-2 cursor-pointer '>Skills and Tools</li>
               <li className='mb-3 hover:bg-gray-100 hover:font-bold  border-0 rounded-xl p-2 cursor-pointer '> <a href='./experience' >Experience</a></li>
                <li className='mb-3 hover:bg-gray-100 hover:font-bold  border-0 rounded-xl p-2 cursor-pointer '>Education</li>
                <li className='mb-3 hover:bg-gray-100 hover:font-bold  border-0 rounded-xl p-2 cursor-pointer '>Contact</li>
            </ul>
        </div>
        <div className='border border-gray-100 w-full pl-20 pt-8'><h1 className='text-3xl  font-extrabold'>Asmita KC</h1>
        <h1 className='text-2xl text-gray-500  font-extrabold mt-8'>"The mind is everything. What you think you become." - Buddha</h1>
        <h1  className='text-xm mt-10' >I am a Computer Engineer with a increasing passion in web development with expertise in HTML, CSS, JavaScript and React creating responsive, user-friendly and modern websites.</h1>
        <div className='mt-5 flex  '>
            <button className='border flex px-3 py-2 rounded-xl text-xm text-white bg-purple-500'>Get Resume  <SquareArrowOutUpRight /></button>
          
            
            <button  className=' flex hover:bg-gray-100 px-3 py-2 ml-5 rounded-xl text-xm '>  <Mail/>Send Email</button></div>
        </div>
       
    </div>
  )
}

export default Home