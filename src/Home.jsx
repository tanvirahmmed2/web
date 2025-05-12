import React from 'react'
import Intro from './Component/Intro'
import Service from './Component/Service'
import About from './Component/About'

export default function Home() {
  return (
    <div className='px-4 py-2'>
      <Intro title='DisiBin'/>
      <Service title='DisiBin'/>
      <About title="DisiBin"/>
    </div>
  )
}
