import React, { useState,useEffect } from "react";

import { Button, useTheme } from "@mui/material";

import { SignInPage, SignInContent, SignInContainer } from "./sign-in.styles";
import "animate.css";
import IconButton from "../../components/icon-button/icon-button.component";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//components
import CustomInput from "../../components/custom-input/customInput.componsnt";


//redux
import useAuth from "../../hooks/useAuth";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

 

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SignIn = () => {
  const [value, setValue] = React.useState(0);
  const [registerUser, setRegisterUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleSignUpInput = (e) => {
    setRegisterUser({ ...registerUser, [e.target.name]: e.target.value });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();

  const {register} = useAuth();


  const handleSignUpClick = () => {
    register(registerUser);
  }

  return (
    <SignInPage theme={theme}>
      <div className="sign-in-image"></div>
      <SignInContent>
        <h1>Welcome to code-showcase</h1>
        <h5>A place to flex your projects</h5>
        <SignInContainer>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="LOG IN" {...a11yProps(0)} sx={{ width: "50%" }} />
              <Tab label="SIGN UP" {...a11yProps(1)} sx={{ width: "50%" }} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <CustomInput variant="standard" label="Username" fullSize />
            <CustomInput variant="standard" label="Password" fullSize />
            <Button>LOG IN</Button>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <CustomInput
              variant="standard"
              label="Username"
              fullSize
              name="username"
              onChange={handleSignUpInput}
            />
            <CustomInput
              variant="standard"
              label="Email"
              fullSize
              name="email"
              onChange={handleSignUpInput}
            />
            <CustomInput
              variant="standard"
              label="Password"
              fullSize
              name="password"
              onChange={handleSignUpInput}
            />
            <CustomInput
              variant="standard"
              label="Confirm Password"
              fullSize
              name="confirmPassword"
              onChange={handleSignUpInput}
            />
            <Button onClick={handleSignUpClick}>SIGN UP</Button>
          </TabPanel>
        </SignInContainer>
      </SignInContent>
    </SignInPage>
  );
};

export default SignIn;
