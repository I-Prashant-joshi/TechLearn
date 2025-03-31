"use client";
import {callApi} from '@/Common/callApi';
import OtpInput from '@/Common/OTPFields'
import React from 'react'
function VerifyOtp() {
    const [otp,setOtp]=React.useState()
    const [email,setEmail]=React.useState()
    const verifyUserOtp = ()=>{
      const response=callApi("auth/verify",{otp,email})
      console.log("res",response);
      
    }
  return (
      <div className='h-[100%] overflow-hidden w-full flex justify-center items-center relative'>
      <div className='w-[80%] max-w-[500px]'>
        <span className='w-full flex justify-center text-2xl lg:text-3xl p-5'>Please enter the OTP</span>
       <label>Email</label>
        <input className='h-[50px] pl-5 w-full mt-2 mb-5 rounded-2xl border-2 border-[#40BDEE]' type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}}  />
      <OtpInput otp={otp} setOtp={setOtp} />
        <button onClick={verifyUserOtp} className='w-full p-2 bg-[#40BDEE] text-[black] rounded-2xl mt-[100px] text-2xl'> Verify </button>
      </div>
       </div>
  )
}

export default VerifyOtp

