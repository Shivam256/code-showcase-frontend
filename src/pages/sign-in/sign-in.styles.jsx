import { styled ,TextField,Button} from "@mui/material";


export const SignInPage = styled("div")(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  padding: "10px 50px",
  backgroundColor: theme.palette.colors.background1,
  display: "flex",
  flexDirection: "column",
  backgroundImage: `url('https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  "& h1": {
    ...theme.palette.textGradients.txtGrad1,
    fontWeight: 500,
    letterSpacing: "3px",
  },
  "& .sign-in-content": {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "row-reverse",
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
    fontWeight: 900,
    fontSize: "3.5em",
    lineHeight: "120%",
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

