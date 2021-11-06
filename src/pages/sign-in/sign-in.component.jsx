import React from "react";

import { useTheme } from "@mui/material";

import {
  SignInPage,
  SignInSection,
  ImgSection,
  SignInInput,
  SignInButton,
  SignInForm,
  SignInOptions,
} from "./sign-in.styles";
import {Icon} from '@iconify/react';
import SignInImage from "../../assets/images/signInPageImage.png";
import "animate.css";
import IconButton from "../../components/icon-button/icon-button.component";

const SignIn = () => {
  const theme = useTheme();
  return (
    <SignInPage theme={theme}>
      <h1>CODE-SHOWCASE</h1>
      <div className="sign-in-content">
        <SignInSection className="animate__animated animate__fadeInLeft">
          <h1>A PLACE TO FLEX YOUR PROJECTS</h1>
          <SignInForm>
            <SignInInput label="Username" variant="outlined" />
            <SignInInput label="Password" variant="outlined" type="password" />
            <SignInButton>SIGN IN</SignInButton>
          </SignInForm>
          <SignInOptions>
            <h3>or</h3>
            <div className="options-container">
                <IconButton><Icon icon="flat-color-icons:google" fontSize={'2em'}/></IconButton>
                <IconButton><Icon icon="akar-icons:github-fill" fontSize={'2em'}/></IconButton>

            </div>
          </SignInOptions>
        </SignInSection>

        <ImgSection className="animate__animated animate__fadeIn animate__delay-1s">
          <img src={SignInImage} alt="" />
        </ImgSection>
      </div>
    </SignInPage>
  );
};

export default SignIn;
