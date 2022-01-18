import { styled, TextField, Button, Box } from "@mui/material";

export const SignInPage = styled("div")(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.palette.colors.background1,
  display: "flex",
  flexDirection: "row",

  "& h2": {
    ...theme.palette.textGradients.txtGrad1,
    fontWeight: 500,
    letterSpacing: "3px",
  },
  "& .sign-in-image": {
    width: "50%",
    height: "100%",
    backgroundColor: "red",
    backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
}));

export const SignInContent = styled("div")(({theme}) => ({
  height: "100%",
  flex: 1,
  padding: "20px 30px",
  '& .page-title':{
    fontSize:'2.5em',
    marginLeft:20,
    marginTop:20,
    ...theme.palette.textGradients.txtGrad1
  },
  '& .page-subtitle':{
    fontSize:'1.5em',
    marginLeft:20,
    ...theme.palette.textGradients.txtGrad1,
    fontWeight:400
  },
  '& .icon-button-container':{
    width:'fit-content',
    margin:'0 auto',
    textAlign:'center',
  }
}));

export const SignInContainer = styled("div")(({ theme }) => ({
  width: "60%",
  height: "60%",
  margin: "50px auto 20px auto",
  backgroundColor: theme.palette.colors.background1,
  boxShadow: theme.shadows.shadow1,
  // border:'1px solid black',
  borderRadius: 10,
  '& .MuiTab-root':{
    color:theme.palette.colors.primary
  },
  '& .MuiTab-root.Mui-selected':{
    color:theme.palette.colors.secondary
  },
  '& .MuiTabs-indicator':{
    backgroundColor:theme.palette.colors.secondary
  }
}));

export const TabContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding:'30px',
  '& form':{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  }
}));
