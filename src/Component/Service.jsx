import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwatchbook , faCode, faPeopleArrows, faDatabase, faLaptopCode, faTicket} from '@fortawesome/free-solid-svg-icons'

export default function Service(props) {
    return (
        <div className='flex flex-col items-center gap-8 justify-center w-full min-h-[95vh] px-4 py-2 text-teal-700'>
            <h1 className='font-bold text-2xl'>{props.title} offering</h1>
            <h1 className='font-bold text-2xl'>Our Services</h1>
            <div className='grid grid-cols-3 gap-12'>
                <div className='flex flex-col gap-4 items-center justify-center w-[250px] h-[300px] bg-gray-300 group hover:bg-gray-200 px-2 py-2 rounded-xl relative'>
                    <FontAwesomeIcon icon={faSwatchbook} className='text-4xl mb-2 text-orange-700' />
                    <h2 className='font-semibold text-lg mb-1'>Ui-Ux Design</h2>
                    <p className='text-center text-sm text-gray-700'>
                        Crafting beautiful, intuitive, and user-friendly digital experiences through thoughtful interface and experience design
                    </p>
                    <a href="/" className='absolute bottom-3 font-semibold text-sm hidden group-hover:block'>Read More</a>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center w-[250px] h-[300px] bg-gray-300 group hover:bg-gray-200 px-2 py-2 rounded-xl relative'>
                    <FontAwesomeIcon icon={faCode} className='text-4xl mb-2 text-orange-700' />
                    
                    <h2 className='font-semibold text-lg mb-1'>Front-End Development</h2>
                    <p className='text-center text-sm text-gray-700'>
                        Building fast, responsive, and interactive websites using modern technologies to bring designs to life in the browser
                    </p>
                    <a href="/" className='absolute bottom-3 font-semibold text-sm hidden group-hover:block'>Read More</a>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center w-[250px] h-[300px] bg-gray-300 group hover:bg-gray-200 px-2 py-2 rounded-xl relative'>
                    <FontAwesomeIcon icon={faDatabase} className='text-4xl mb-2 text-orange-700' />
                    <h2 className='font-semibold text-lg mb-1'>Back-End Development</h2>
                    <p className='text-center text-sm text-gray-700'>
                        Developing the behind-the-scenes logic, databases, and server-side functionality that power your website or app
                    </p>
                    <a href="/" className='absolute bottom-3 font-semibold text-sm hidden group-hover:block'>Read More</a>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center w-[250px] h-[300px] bg-gray-300 group hover:bg-gray-200 px-2 py-2 rounded-xl relative'>
                    <FontAwesomeIcon icon={faLaptopCode} className='text-4xl mb-2 text-orange-700' />
                    <h2 className='font-semibold text-lg mb-1'>Full-Stack Development</h2>
                    <p className='text-center text-sm text-gray-700'>
                        Delivering complete web solutions by combining front-end and back-end development into a seamless, scalable experience
                    </p>
                    <a href="/" className='absolute bottom-3 font-semibold text-sm hidden group-hover:block'>Read More</a>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center w-[250px] h-[300px] bg-gray-300 group hover:bg-gray-200 px-2 py-2 rounded-xl relative'>
                    <FontAwesomeIcon icon={faTicket} className='text-4xl mb-2 text-orange-700' />
                    <h2 className='font-semibold text-lg mb-1'>Branding</h2>
                    <p className='text-center text-sm text-gray-700'>
                        Creating memorable brand identities through logos, color schemes, and design systems that reflect your vision and connect with your audience
                    </p>
                    <a href="/" className='absolute bottom-3 font-semibold text-sm hidden group-hover:block'>Read More</a>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center w-[250px] h-[300px] bg-gray-300 group hover:bg-gray-200 px-2 py-2 rounded-xl relative'>
                    <FontAwesomeIcon icon={faPeopleArrows} className='text-4xl mb-2 text-orange-700' />
                    
                    <h2 className='font-semibold text-lg mb-1'>Consultation</h2>
                    <p className='text-center text-sm text-gray-700'>
                        Let’s talk! Get expert advice, explore your ideas, and find the best digital solution for your business—no cost, no pressure
                    </p>
                    <a href="mailto:disibin@gmail.com" className='absolute bottom-3 font-semibold text-sm hidden group-hover:block'>Mail Us</a>
                </div>
            </div>
        </div>
    )
}
