import React, { useState, useEffect } from "react";

import { Button, useTheme, Tabs, Box, Tab } from "@mui/material";

import "animate.css";
import { Icon } from "@iconify/react";
import IconButton from "../../components/icon-button/icon-button.component";
import { useAlert } from "react-alert";
import { useNavigate, useLocation } from "react-router-dom";
//components
import CustomInput from "../../components/custom-input/customInput.componsnt";
import CustomButton from "../../components/custom-button/customButton.component";
//redux
import useAuth from "../../hooks/useAuth";

//styles
import {
  SignInPage,
  SignInContent,
  SignInContainer,
  TabContainer,
} from "./sign-in.styles";

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
      {value === index && <TabContainer>{children}</TabContainer>}
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
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });

  const alert = useAlert();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleSignUpInput = (e) => {
    setRegisterUser({ ...registerUser, [e.target.name]: e.target.value });
  };

  const handleLoginInInput = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();

  const { register, login, isLoggedIn } = useAuth();

  const handleSignUpClick = (e) => {
    e.preventDefault();
    // alert.show('TEST ALERT!!',{type:'error'});
    if (registerUser.password !== registerUser.confirmPassword) {
      alert.show("Passwords do not match", { type: "error" });
      return;
    }
    const registerUserData = {
      username: registerUser.username,
      email: registerUser.email,
      password: registerUser.password,
    };
    register(registerUserData);
    navigate("/");
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/feed");
    }
  }, [isLoggedIn]);

  const handleLoginClick = (e) => {
    e.preventDefault();
    console.log(loginUser);
    login(loginUser);
  };

  return (
    <SignInPage theme={theme}>
      <div className="sign-in-image"></div>
      <SignInContent>
        <h1 className="page-title">Welcome to code-showcase</h1>
        <h5 className="page-subtitle">A place to flex your projects</h5>
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
            <form onSubmit={handleLoginClick}>
              <CustomInput
                variant="standard"
                label="Username"
                fullSize
                onChange={handleLoginInInput}
                required
                name="username"
              />
              <CustomInput
                variant="standard"
                label="Password"
                fullSize
                onChange={handleLoginInInput}
                required
                name="password"
                type="password"
              />
              <CustomButton type="submit">LOG IN</CustomButton>
            </form>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <form onSubmit={handleSignUpClick}>
              <CustomInput
                variant="standard"
                label="Username"
                fullSize
                name="username"
                onChange={handleSignUpInput}
                required
              />
              <CustomInput
                variant="standard"
                label="Email"
                fullSize
                name="email"
                onChange={handleSignUpInput}
                required
              />
              <CustomInput
                variant="standard"
                label="Password"
                fullSize
                name="password"
                onChange={handleSignUpInput}
                required
                type="password"
              />
              <CustomInput
                variant="standard"
                label="Confirm Password"
                fullSize
                name="confirmPassword"
                onChange={handleSignUpInput}
                required
                type="password"
              />
              <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
          </TabPanel>
        </SignInContainer>
        {/* <div className="icon-button-container">
          <div>or</div>
          <IconButton>
            <Icon icon="flat-color-icons:google" />
          </IconButton>
          <IconButton>
            <Icon icon="akar-icons:github-fill" />
          </IconButton>
        </div> */}
      </SignInContent>
    </SignInPage>
  );
};

export default SignIn;
