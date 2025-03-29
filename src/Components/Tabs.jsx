"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "../../src/app/globals.css";


import dynamic from "next/dynamic";
import Login from "./Login";
const Register = dynamic(() => import("./Register"), { ssr: false });


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
        {value === "one" ? <Login /> : <Register  />}
      </Box>
    </div>
  );
}
