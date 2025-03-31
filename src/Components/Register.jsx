'use client'

import {callApi} from "@/Common/callApi";
import React from "react";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
function Register() {
    const [field, setField] = React.useState({ username: "",email:"", password: "" });
    const router=useRouter()
    const [isMounted, setIsMounted] = React.useState(false); // State to check if component is mounted
  
    React.useEffect(() => {
      setIsMounted(true); 
    }, []);
  
    function getFieldValue(value, field) {
        setField((prev) => ({ ...prev, [field]: value }));
    }
    async function submitData(event) {
        event.preventDefault();
        if (!isMounted) return

      const response= await callApi("auth/register-user",field)

     if(response.status==="success"){
      router.push("/auth/verifyOtp")
     }
      
    }
    return (
      <>
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
              type="text"
              value={field.username}
              autoComplete="off"
              placeholder="Enter your UserName"
            />
            <TextField
              label="Email"
              variant="outlined"
              onChange={(e) => getFieldValue(e.target.value, "email")}
              name="username"
              type="email"
              value={field.email}
              autoComplete="off"
              placeholder="Enter your email"
            />
            <TextField
              name="password"
              type="password"
              onChange={(e) => getFieldValue(e.target.value, "password")}
              autoComplete="off"
              value={field.password}
              placeholder="Enter your password"
            />
          </div>
          <Button className="h-[50px]" type="submit" variant="contained" color="success" >
            Signup
          </Button>
        </form>
      </>
    );
  }
  export default Register