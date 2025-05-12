import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Component/NavBar'
import About from './Component/About'
import LogIn from './Component/LogIn'
import Home from './Home'
import Footer from './Component/Footer'
import Help from './Component/Help'
import Service from './Component/Service'

export default function App() {
  return (
    <div className='relative'>

    
    <NavBar title='DisiBin'/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About title='DisiBin' />} />
      <Route path="/help" element={<Help />} />
      <Route path="/services" element={<Service />} />
      <Route path="/login" element={<LogIn title='DisiBin' />} />
    </Routes>
    <Footer title='DisiBin'/>
    </div>
  )
}
