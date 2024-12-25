import React from 'react'
import InputCard from '../components/InputCard'

const AuthForm = () => {
  return (
    <div className='bg-white w-[35%] h-[87%] shadow-lg rounded-lg flex flex-col justify-center items-center'>
        <div className='text-4xl font-extrabold'>Welcome</div>
        <div className='text-xl font-light mb-16'>Sign up now to get started</div>
        <InputCard label='Full name' name='name' placeholder='Enter your full name' className='mb-6'/>
        <InputCard label='Email address' type='email' name='email' placeholder='Enter your email id' className='mb-6'/>
        <InputCard label='Password' type='password' name='password' placeholder='Enter your password' className='mb-6'/>
    </div>
  )
}

export default AuthForm
