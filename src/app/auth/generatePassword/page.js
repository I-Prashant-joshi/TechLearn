"use client";
import {callApi} from '@/Common/callApi';
import React from 'react'
function GeneratePassword() {
    const [password,setPassword]=React.useState()
    const [passwordError,setPasswordError]=React.useState(false)

    const submitData = ()=>{
        if(!password){
            setPasswordError(true)
        }
        else{
            const response= callApi("auth/generate-password",{password})
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
        <span className='w-full flex justify-center text-2xl lg:text-3xl p-5'>Please enter new password</span>
       <label>New Password</label>
        <input className='h-[50px] pl-5 w-full mt-2 mb-1 rounded-2xl border-2 border-[#40BDEE]' type="text" value={password} onChange={changeEmail}  />
        {passwordError && <span className='text-[red] text-[14px]'>Please enter new password</span>}
        <button onClick={submitData} className='w-full p-2 bg-[#40BDEE] text-[black] rounded-2xl mt-[100px] text-2xl'> Submit </button>
      </div>
       </div>
  )
}

export default GeneratePassword

