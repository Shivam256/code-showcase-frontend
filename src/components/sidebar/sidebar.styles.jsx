import { styled, Drawer, Button } from "@mui/material";

export const SidebarContainer = styled("div")(() => ({
  width: "fit-content",
  height: "fit-content",
}));

export const SidebarDrawer = styled(Drawer)(({ theme }) => ({
  backgroundColor: "transparent",
  height: "90vh",

  "& .MuiBackdrop-root": {
    background: "none",
    backgroundColor: "transparent",
    filter: "brightness(80%)",
  },

  "& .MuiPaper-root": {
    height: "96vh",
    width: "300px",
    margin: "2vh 0 2vh 20px",
    backgroundColor: theme.palette.colors.background1,
    overflowX: "hidden",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows.shadow1,
  },
}));

export const MainSidebar = styled("div")(({ theme }) => ({
  width:'100%',
  height:'100%',
  padding:'10px 0',
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent:'space-between',
  "& .close-icon": {
    position: "absolute",
    top: "10px",
    left: "10px",
    fontSize: "2em",
    color: theme.palette.colors.color3,
    cursor: "pointer",
  },

  "& .MuiAvatar-root ": {
    width: "180px",
    height: "180px",
    marginTop: "20px",
  },

  '& .sidebar-btns':{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  },

  '& .user-info':{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',

    '& .username':{
      fontSize:'1.4em',
      fontWeight:500,
      color:'black'
    }
  }
}));

export const SidebarBtnContainer = styled(Button)(({ theme,selected }) => ({
  width: "70%",
  height: "fit-content",
  ...theme.palette.textGradients.txtGrad1,
  border: `2px solid ${theme.palette.colors.primary}`,
  borderRadius: 10,
  margin: "10px 0",
  fontSize: "1em",
  padding: "3px",
  backgroundColor:selected?'red':'',
  color:theme.palette.colors.color3,

  "& a": {
    textDecoration: "none",
    width: "100%",
    height: "100%",
    fontWeight: 600,
    letterSpacing:2,
    color:selected?'white':'',
    
  },
}));

export const LogoutBtn = styled(Button)(({theme})=>({
  width:'70%',
  height:'fit-content',
  boxShadow:theme.shadows.shadow1,
  backgroundColor:'white',
  padding: "10px",
  fontWeight: 600,
  letterSpacing:2,
  color:theme.palette.colors.secondary,

  ...theme.palette.textGradients.txtGrad1,
}))
