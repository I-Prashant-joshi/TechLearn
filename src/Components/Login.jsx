import { callGetApi } from "@/Common/callApi";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
function Login() {
    const [field, setField] = React.useState({ username: "", password: "" });
    const router= useRouter()
    function getFieldValue(value, field) {
      setField((prev) => ({ ...prev, [field]: value }));
    }
    function submitData(event) {
      event.preventDefault();
    }

    return (
      <>
        <form method="GET" className="inputForm" onSubmit={submitData}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <TextField
              label="email"
              variant="outlined"
              name="username"
              onChange={(e) => getFieldValue(e.target.value, "username")}
              type="email"
              value={field.username}
              autoComplete="off"
              placeholder="Enter your UserName"
            />
            <TextField
              name="password"
              type="password"
              autoComplete="off"
              onChange={(e) => getFieldValue(e.target.value, "password")}
              value={field.password}
              placeholder="Enter your password"
            />
      
          </div>
          <div>
          <Button  className="w-full h-[50px] flex justify-center" type="submit" variant="contained" color="success">
            Login
          </Button>
          <Link href="/auth/forgotPassword" className="w-full pointer flex justify-center mt-5" >
              Forgot Password ?
          </Link>
            </div>
        </form>
      </>
    );
  }
export default Login  