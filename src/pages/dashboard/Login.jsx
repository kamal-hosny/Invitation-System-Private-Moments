import React, { useContext, useEffect, useState } from 'react';
import LoginForm from '../../components/dashboard/login/LoginForm';
import { AllStateContext } from '../../context/AllStateContext';

const Login = () => {
  const { mobileSize } = useContext(AllStateContext)

  return (
    <div className='login relative'>
      <div className='fixed left-0 top-0 z-0 flex justify-between h-screen w-screen'>
        <div className='flex-1 bg-[#fbf9ed] flex items-center justify-end'>
        {!mobileSize && (
          <div className='relative h-[342.4px] w-[400px] '>
          <img className='h-[342.4px] w-[400px]  object-cover grayscale-[20%] transition-all hover:grayscale-[70%] ' src="https://i.ibb.co/Xz4qpSd/wedding.jpg" alt="cover" />
        </div>
        )}
          
        </div>
        <div className='flex-1 bg-[#f8edcf] flex items-center justify-start'>
            {!mobileSize && (<LoginForm />)}
        </div>
      </div>
      {mobileSize && ( <div className='relative flex justify-center items-center h-screen w-screen'><div className='flex flex-col gap-5 justify-center items-center'> <div className="image-login w-28 h-28"><img className='object-cover' src="https://i.ibb.co/jz1tS6k/Whats-App-Image-2024-06-10-at-00-00-30-4670a87f-modified-2.png" alt="logo" /></div> <LoginForm /></div></div>)}
    </div>
  );
}

export default Login;
