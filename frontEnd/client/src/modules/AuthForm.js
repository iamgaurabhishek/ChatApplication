import React, { useState } from 'react'
import InputCard from '../components/InputCard'
import Button from '../components/Button'

const AuthForm = ({isSignInPage = false}) => {

    const [data, setData] = useState({
        ...(!isSignInPage && {
            fullName: '',
        }),
        email: '',
        password: '',
    })

    console.log('data: >> ', data);

  return (
    <div className='bg-white w-[35%] h-[87%] shadow-lg rounded-lg flex flex-col justify-center items-center'>
        <div className='text-4xl font-extrabold'>Welcome {isSignInPage && 'Back'}</div>
        <div className='text-xl font-light mb-16'>{isSignInPage ? "Sign In to explore more" : "Sign up now to get started"}</div>

        <form className='flex flex-col items-center w-full' onSubmit={() => console.log('Submitted..')}>
            {!isSignInPage && <InputCard label='Full name' name='name' placeholder='Enter your full name' className='mb-6' value={data.fullName} onChange={(e) => setData({ ...data, fullName: e.target.value})} />}
            <InputCard label='Email address' type='email' name='email' placeholder='Enter your email id' className='mb-6' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value})} />
            <InputCard label='Password' type='password' name='password' placeholder='Enter your password' className='mb-10' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value})} />
            <Button label={isSignInPage ? 'Sign in' : 'Sign up'} type='submit' className='w-[50%] mb-2'/>
        </form>
        <div>{isSignInPage ? "Did not have an account?" :  "Already have an account?"} <span className='text-primary cursor-pointer underline'>{ isSignInPage? "Sign up" : "Sign in"}</span></div>
    </div>
  )
}

export default AuthForm
