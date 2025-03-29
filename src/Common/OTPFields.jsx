"use client";
import React from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'

const OtpInput = ({otp,setOtp}) => {

  const handleChange = (newValue) => {
    if (/^\d{0,4}$/.test(newValue)) {
      setOtp(newValue)
    }
  }
  return (
    <MuiOtpInput value={otp} onChange={handleChange}  />
  )
}
export default OtpInput
