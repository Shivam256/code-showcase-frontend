import React from "react";
import { Avatar, Button, styled } from "@mui/material";

const UserOverviewContainer = styled("div")(({theme}) => ({
  width: "100%",
  height: "fit-content",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderBottom: "1px solid #3A0CA3",
  padding: "8px 6px",
  justifyContent: "space-between",
  margin:'5px 0 8px 0',
  "& .MuiAvatar-root": {
    transform: "scale(0.9)",
    marginRight: 10,
  },
  '& .innerContainer':{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  '& .MuiButton-root':{
    display:'block',
    width:'fit-content',
    borderRadius:5,
    backgroundColor:'white',
    fontSize:'0.7em',
    letterSpacing:1,
    ...theme.palette.textGradients.txtGrad1,
    border:`1px solid ${theme.palette.colors.secondary}`
  }
}));

const UserOverview = () => {
  return (
    <UserOverviewContainer>
      <div className="innerContainer">
        <Avatar src="https://wallpapercave.com/uwp/uwp1093460.jpeg" />
        <span className="username">gojo_satoru</span>
      </div>
      <Button>FOLLOW</Button>
    </UserOverviewContainer>
  );
};

export default UserOverview;
