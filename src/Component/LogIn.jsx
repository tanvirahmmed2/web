import React, { useState } from 'react'

export default function Login(props) {
  let [Signin, setSignin] = useState("flex");
  let [Signup, setSignup] = useState("hidden");

  const gotosignup = () => {
    setSignin("hidden")
    setSignup("flex")

  }
  const gotosignin = () => {
    setSignin("flex")
    setSignup("hidden")

  }

  return (
    <div className='w-full h-screen  flex items-center justify-center'>
      <div id='signinbox' className={`w-160 border-1 border-teal-700 rounded-3xl bg-white h-[60vh] overflow-hidden ${Signin} flex-row items-center justify-center  `}>



        <div className={`w-[50%] gap-2 flex flex-col justify-center items-center`}>

          <input type="text" className='w-[200px]  border-1 outline-0 border-teal-700 px-2 py-1 shadow-2xl   ' placeholder='username or email' />
          <input type="text" className='w-[200px] border-1 outline-0 border-teal-700 px-2 py-1 shadow-2xl   ' placeholder='password' />
          <button className='bg-teal-700 mt-2 px-6 py-0.5   text-white cursor-pointer'>sign in</button>
        </div>
        <div className={`bg-teal-700 text-white w-[50%] h-[60vh] flex flex-col items-center justify-center`}>
          <h3>Welcome back to</h3>
          <h1 className='font-bold text-3xl'>{props.title}</h1>
          <h3>sign in and get back to</h3>
          <h3>your dashboard</h3>
          <p className='mt-4 cursor-pointer' onClick={gotosignup}>new here?</p>


        </div>

      </div>
      <div id='signupbox' className={`w-160 border-1 border-teal-700 bg-white rounded-3xl h-[60vh] overflow-hidden ${Signup} flex-row items-center justify-center  `}>
        <div className={`bg-teal-700 text-white w-[50%] h-[60vh] flex flex-col items-center justify-center`}>
          <h3>Welcome to</h3>
          <h1 className='font-bold text-3xl'>{props.title}</h1>
          <h3>create new account</h3>
          <h3>to access all our services</h3>

          <p className='mt-4 cursor-pointer' onClick={gotosignin}>old user?</p>

        </div>
        <div className='flex gap-2 flex-col w-[50%] items-center justify-center'>
          <input type="text" className='w-[200px] border-1 outline-0 border-teal-700 px-2 py-1 shadow-2xl    ' placeholder='first name' />
          <input type="text" className='w-[200px] border-1 outline-0 border-teal-700 px-2 py-1 shadow-2xl   ' placeholder='sure name' />
          <input type="text" className='w-[200px] border-1 outline-0 border-teal-700 px-2 py-1 shadow-2xl   ' placeholder='email' />
          <input type="date" className='w-[200px] border-1 outline-0 border-teal-700 px-2 py-1 shadow-2xl   ' />
          <input type="text" className='w-[200px] border-1 outline-0 border-teal-700 px-2 py-1 shadow-2xl   ' placeholder='password' />
          <button className='bg-teal-700 mt-2 px-6 py-0.5   text-white cursor-pointer'>sign up</button>
        </div>
      </div>
    </div>
  )
}
