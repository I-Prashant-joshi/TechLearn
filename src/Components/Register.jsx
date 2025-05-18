'use client'

import { callApi } from "@/Common/callApi";
import React from "react";
import { Button, CircularProgress, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import Toast, { playSound } from "@/Common/ToastMessage";

function Register() {
  const [field, setField] = React.useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = React.useState({});
  const [loader, setLoader] = React.useState(false);
  const router = useRouter();

  const validate = () => {
    const newErrors = {};
    if (!field.username.trim()) newErrors.username = "Username is required";
    if (!field.email.trim()) newErrors.email = "Email is required";
    if (!field.password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function getFieldValue(value, fieldName) {
    setField((prev) => ({ ...prev, [fieldName]: value }));
    setErrors((prev) => ({ ...prev, [fieldName]: "" })); // Clear error on input
  }

  async function submitData(event) {
    event.preventDefault();

    if (!validate()) {
      playSound();
      return;
    }

    setLoader(true);

    const response = await callApi("auth/register-user", field);

    if (response.status === "success") {
      Toast.success(response.message);
      playSound();
      router.push("/auth/verifyOtp");
    } else {
      Toast.error(response.error);
      playSound();
    }

    setLoader(false);
  }

  return (
    <form className="inputForm" onSubmit={submitData}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <TextField
          label="UserName"
          variant="outlined"
          name="username"
          onChange={(e) => getFieldValue(e.target.value, "username")}
          value={field.username}
          autoComplete="off"
          placeholder="Enter your UserName"
          error={Boolean(errors.username)}
          helperText={errors.username}
        />
        <TextField
          label="Email"
          variant="outlined"
          onChange={(e) => getFieldValue(e.target.value, "email")}
          name="email"
          value={field.email}
          autoComplete="off"
          placeholder="Enter your email"
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          onChange={(e) => getFieldValue(e.target.value, "password")}
          autoComplete="off"
          value={field.password}
          placeholder="Enter your password"
          error={Boolean(errors.password)}
          helperText={errors.password}
        />
      </div>
      <Button className="h-[50px] mt-4" type="submit" variant="contained" color="success">
        {loader ? <CircularProgress style={{ color: "white" }} /> : "Signup"}
      </Button>
    </form>
  );
}

export default Register;
