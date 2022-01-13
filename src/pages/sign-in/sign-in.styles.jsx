import { styled, TextField, Button } from "@mui/material";

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


export const SignInContent = styled("div")(()=>({
  height:'100%',
  flex:1,
  padding: '20px 30px',
}))


export const SignInContainer = styled("div")(({theme})=>({
  width:'60%',
  height:'60%',
  margin:'50px auto',
  backgroundColor:theme.palette.colors.background1,
  boxShadow:theme.shadows.shadow1,
  // border:'1px solid black',
  borderRadius:10,
}))
