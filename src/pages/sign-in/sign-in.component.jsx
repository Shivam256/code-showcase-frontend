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
     
    </SignInPage>
  );
};

export default SignIn;
