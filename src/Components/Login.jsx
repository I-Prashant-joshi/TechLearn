import { Button, TextField } from "@mui/material";
import React from "react";
function Login() {
    const [field, setField] = React.useState({ username: "", password: "" });
  
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
              name="password"
              type="password"
              autoComplete="off"
              onChange={(e) => getFieldValue(e.target.value, "password")}
              value={field.password}
              placeholder="Enter your password"
            />
          </div>
          <Button type="submit" variant="contained" color="success">
            Login
          </Button>
        </form>
      </>
    );
  }
export default Login  