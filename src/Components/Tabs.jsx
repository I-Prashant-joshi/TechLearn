"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "../../src/app/globals.css";
import { Button, TextField } from "@mui/material";

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
function Register() {
  const [field, setField] = React.useState({ username: "",email:"", password: "" });
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
        <Button variant="contained" color="success">
          Signup
        </Button>
      </form>
    </>
  );
}

export default function TabsComponent() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="loginBox">
      <Box sx={{ width: "400px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="red"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "rgba(64, 189, 238, 0.834)",
            },
            "& .Mui-selected": {
              color: "rgba(64, 189, 238, 0.834)",
              fontWeight: "bold",
            },
          }}
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Login" sx={{ width: "50%" }} />
          <Tab value="two" label="Signup" sx={{ width: "50%" }} />
        </Tabs>
        {value === "one" ? <Login /> : <Register />}
      </Box>
    </div>
  );
}
