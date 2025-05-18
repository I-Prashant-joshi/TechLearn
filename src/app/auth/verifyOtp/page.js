"use client";
import { callApi } from '@/Common/callApi';
import OtpInput from '@/Common/OTPFields';
import Toast, { playSound } from '@/Common/ToastMessage';
import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

function VerifyOtp() {
  const [otp, setOtp] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const router = useRouter();

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    if (!otp || otp.length < 4) newErrors.otp = "Valid OTP is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const verifyUserOtp = async () => {
    setSubmitted(true);
    setLoader(true)
    if (!validate()) {
      playSound();
      return;
    }

    const response = await callApi("auth/verify", { otp, email });

    if (response.status === "success") {
    setLoader(false)
      Toast.success(response.message);
      playSound();
      const token = response.token;
      let now = new Date();
      now.setTime(now.getTime() + (24 * 60 * 60 * 1000));
      document.cookie = `token=${token}; expires=${now.toUTCString()}; path=/`;
      router.push("/");
    } else {
      Toast.error(response.message);
      playSound();
      setLoader(false)

    }
  };

  return (
    <div className="h-[100%] overflow-hidden w-full flex justify-center items-center relative">
      <div className="w-[80%] max-w-[500px]">
        <span className="w-full flex justify-center text-2xl lg:text-3xl p-5">
          Please enter the OTP
        </span>

        <label>Email</label>
        <input
          className="h-[50px] pl-5 w-full mt-2 rounded-2xl border-2 border-[#40BDEE]"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
        />
        {submitted && errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email}</p>
        )}

        <div className="mt-6">
          <OtpInput otp={otp} setOtp={setOtp} />
          {submitted && errors.otp && (
            <p className="text-red-600 text-sm mt-1">{errors.otp}</p>
          )}
        </div>

        <button
          onClick={verifyUserOtp}
          className="w-full p-2 bg-[#40BDEE] text-[black] rounded-2xl mt-[100px] text-2xl"
        >
          {loader ? <CircularProgress style={{ color: "white" }} /> : "Verify"}
        </button>
      </div>
    </div>
  );
}

export default VerifyOtp;
