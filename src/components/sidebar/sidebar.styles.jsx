import { styled, Drawer } from "@mui/material";

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
    height: "95vh",
    width: "300px",
    margin: "2.5vh 0 2.5vh 20px",
    backgroundColor: theme.palette.colors.background1,
    overflowX: "hidden",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows.shadow1,
  },
}));

export const MainSidebar = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems:'center',
  "& .close-icon": {
    position: "absolute",
    top: "10px",
    left: "10px",
    fontSize: "2em",
    color: theme.palette.colors.color3,
    cursor: "pointer",
  },

  '& .MuiAvatar-root ':{
      width:'200px',
      height:'200px',
      marginTop:'30px',
  }
}));
