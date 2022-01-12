import { TextField, styled } from "@mui/material";
import React from "react";

const CustomTextField = styled(TextField)(({ full }) => ({
  width: full ? "100%" : "85%",
  margin: "0px 0 20px 0",
  "& .MuiInput-root:before": {
    borderBottom: "1px solid #7209B7",
  },
  "& .MuiInput-root:after": {
    borderBottom: "2px solid #7209B7",
  },
  "& .MuiInputLabel-root": {
    color: "#F72585",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#F72585",
  },
}));

const CustomInput = ({ fullSize, ...props }) => {
  return <CustomTextField full={fullSize} {...props} />;
};

export default CustomInput;
