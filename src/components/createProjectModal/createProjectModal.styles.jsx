import { Button, styled } from "@mui/material";

export const CreateProjectModalContainer = styled("div")(({theme}) => ({
  width: "60vw",
  height: "70vh",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor:'#fff',
  outline:'none',
  borderRadius:10,
  padding: '10px 20px',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'space-between',
  '& .modal-header':{
    ...theme.palette.textGradients.txtGrad1,
  }
}));


export const CustomButton = styled(Button)(({theme})=>({
  display:'block',
  marginBottom:20,
  width:'40%',
  borderRadius:5,
  backgroundColor:'white',
  ...theme.palette.textGradients.txtGrad1,
  border:`1px solid ${theme.palette.colors.secondary}`
}))