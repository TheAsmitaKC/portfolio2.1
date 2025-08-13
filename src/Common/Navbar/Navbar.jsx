import React from 'react'
import { Github,Moon, SquareArrowOutUpRight  } from 'lucide-react';
const Navbar = () => {
  return (
    <div className='flex justify-between p-5 border border-gray-200 ' >
        <div >
            <ul className='flex gap-10 text-xm'>
                <li className='font-black flex'>  <SquareArrowOutUpRight />asmitakc.com.np</li>
                <li>Home</li>
                <li>Blog</li>
                <li>Resume</li>
            </ul>
        </div>
        <div className='flex gap-5  text-xm'>
            <input className='border text-center' type="text" placeholder='Search sections...'
         />
            <Github  />
            <Moon />
        </div>
    </div>
  )
}

export default Navbar