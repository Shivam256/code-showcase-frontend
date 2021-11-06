import { styled ,TextField,Button} from "@mui/material";


export const SignInPage = styled("div")(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  padding: "10px 50px",
  backgroundColor: theme.palette.colors.background1,
  display: "flex",
  flexDirection: "column",
  "& h1": {
    ...theme.palette.textGradients.txtGrad1,
    fontWeight: 500,
    letterSpacing: "3px",
  },
  "& .sign-in-content": {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
}));

export const SignInSection = styled("div")(() => ({
  width: "50%",
  height: "90%",
  display:'flex',
  flexDirection:'column',
  // backgroundColor:'red',

  "& h1": {
    fontWeight: 800,
    fontSize: "3.5em",
    lineHeight: "110%",
    marginBottom:'20px',
  },
}));

export const ImgSection = styled("div")(() => ({
  width: "50%",
  height: "100%",
  // backgroundColor:'red',
  display: "grid",
  placeItems: "center",


  // "& img": {
  //   width: "700px",
  //   height: "700px",
  // },
}));

export const SignInForm = styled('form')(()=>({
  width:'60%',
  height:'fit-content',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  marginBottom:'20px',
}))

export const SignInOptions = styled("div")(()=>({
  width:'60%',
  height:'fit-content',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
}))

export const SignInInput = styled(TextField)(({theme}) => ({
  width: "100%",
  height: "fit-content",
  margin:'20px 0',
  "& label.Mui-focused": {
    color: theme.palette.colors.primary,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.colors.primary,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.colors.color3,
      borderWidth:2,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.colors.color3,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.colors.secondary,
    },
  },
}));


export const SignInButton = styled(Button)(({theme})=>({
    ...theme.palette.gradients.gradient1,
    width:'fit-content',
    height:'fit-content',
    padding:'5px 20px',
    color:'white',
    fontWeight:500,
    borderRadius:theme.shape.borderRadius,
    
}))

export const SignInOption = styled(Button)(({theme})=>({
  width:'50px',
  height:'50px',
  backgroundColor:theme.palette.colors.background1,
  boxShadow:theme.shadows.shadow1,
  color:'black',
  margin:'10px 20px',
}))
