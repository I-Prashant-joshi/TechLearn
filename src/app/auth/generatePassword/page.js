"use client";

import {callApi} from '@/Common/callApi';
import Toast, { playSound } from '@/Common/ToastMessage';
import { CircularProgress } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
 function GeneratePassword() {
    
    const [password,setPassword]=React.useState()
    const [loader,setLoader]=React.useState()
    const [passwordError,setPasswordError]=React.useState(false)
    const pathname = useSearchParams()
    const code = pathname.get("code")
    const router= useRouter()
    const submitData = async()=>{
        setLoader(true);
        if(!password){
            setPasswordError(true)
            setLoader(false);
            
        }
        else{
            const response= await callApi(`auth/generate-password?code=${code}`,{password})
            Toast.error(response.message);
            playSound();
            setLoader(false);
            if(response.status==="success"){
                router.push("/auth/login");
            }
        }
      
    }
    function changeEmail(event){
        setPassword(event.target.value)
        setPasswordError(false)
    }
  return (
      <div className='h-[100%] overflow-hidden w-full flex justify-center items-center relative'>
      <div className='w-[80%] max-w-[500px]'>
        <span className='w-full flex justify-center text-2xl lg:text-3xl p-5'>Please enter new password</span>
       <label>New Password</label>
        <input className='h-[50px] pl-5 w-full mt-2 mb-1 rounded-2xl border-2 border-[#40BDEE]' type="text" value={password} onChange={changeEmail}  />
        {passwordError && <span className='text-[red] text-[14px]'>Please enter new password</span>}
        <button onClick={submitData} className='w-full p-2 bg-[#40BDEE] text-[black] rounded-2xl mt-[100px] text-2xl'> 
            {loader ? <CircularProgress style={{ color: "white" }} /> : "Submit"}{" "}
        </button>
      </div>
       </div>
  )
}

export default GeneratePassword

