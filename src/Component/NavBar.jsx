import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <nav className=' border-b-1 text-teal-700 h-12 px-4 py-2 flex  flex-row items-center justify-between w-full z-999 relative'>

        <Link to="/">
            <h1 className=' text-2xl font-bold'>{props.title}</h1>
        </Link>
        <div className=' flex mr-2 flex-row h-12 gap-4 items-center justify-center font-medium text-l'>
            <Link to="/" className='w-28 h-12 flex items-center justify-center '>Home</Link>
            <div className={`main-wrapper relative group`}>
                
                <Link to="/services" className='w-28 h-12 flex items-center justify-center '>Services</Link>

                    <div className='absolute group-hover:block hidden'>
                        <Link to="/ui-ux-dev" className='w-36 h-12 flex items-center justify-tart  hover:scale-110   hover:text-red-600 hover:bg-white rounded-xl px-4'>Ui-Ux Design</Link>
                        <Link to="/front-end-dev" className='w-36 h-12 flex items-center justify-tart  hover:scale-110   hover:text-red-600 hover:bg-white rounded-xl px-4'>Front-End Dev</Link>
                        <Link to="/back-end-dev" className='w-36 h-12 flex items-center justify-start  hover:scale-110  hover:text-red-600 hover:bg-white rounded-xl px-4'>Back-End Dev</Link>
                        <Link to="/full-stack-dev" className='w-36 h-12 flex items-center justify-start hover:scale-110  hover:text-red-600 hover:bg-white rounded-xl px-4'>Full-Stack Dev</Link>
                        <Link to="/branding" className='w-36 h-12 flex items-center justify-start  hover:scale-110  hover:text-red-600 hover:bg-white rounded-xl px-4'>Branding</Link>
                        
                    </div>
            </div>
            <Link to="/help" className='w-28 h-12 flex items-center justify-center '>Help</Link>
            <Link to="/about" className='w-28 h-12 flex items-center justify-center '>About Us</Link>
            <Link to="/login" className='w-28 h-12 flex items-center justify-center '>Login</Link>
        </div>
    </nav>
  )
}
