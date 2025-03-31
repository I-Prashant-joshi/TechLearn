"use client";
import {callApi} from '@/Common/callApi';
import React from 'react'
function ForgotPassword() {
    const [email,setEmail]=React.useState()
    const [emailError,setEmailError]=React.useState(false)

    const submitData = ()=>{
        if(!email){
            setEmailError(true)
        }
        else{

            const response= callApi("auth/forgot-password",{email})
            console.log("res",response);
        }
      
    }
    function changeEmail(event){
        setEmail(event.target.value)
        setEmailError(false)
    }
  return (
      <div className='h-[100%] overflow-hidden w-full flex justify-center items-center relative'>
      <div className='w-[80%] max-w-[500px]'>
        <span className='w-full flex justify-center text-2xl lg:text-3xl p-5'>Please enter the Email</span>
       <label>Email</label>
        <input className='h-[50px] pl-5 w-full mt-2 mb-1 rounded-2xl border-2 border-[#40BDEE]' type="email" value={email} onChange={changeEmail}  />
        {emailError && <span className='text-[red] text-[14px]'>Email is required</span>}
        <button onClick={submitData} className='w-full p-2 bg-[#40BDEE] text-[black] rounded-2xl mt-[100px] text-2xl'> Submit </button>
      </div>
       </div>
  )
}

export default ForgotPassword

