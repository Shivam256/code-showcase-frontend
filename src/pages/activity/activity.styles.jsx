import { Card, styled } from "@mui/material";

export const ActivityPage = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
}));

export const NotificationSection = styled(Card)(({ theme }) => ({
  width: "43%",
  backgroundColor: "#fff",
  boxShadow: theme.shadows.shadow3,
  borderRadius: 10,
  margin:'10px 0',
  display:'flex',
  flexDirection:'column',
  '& h3':{
    margin:'10px 20px'
  },
  '& .notification-container':{
    width:'100%',
    flex:1,
    
  }
}));

export const GraphSection = styled(Card)(({ theme }) => ({
  width: "53%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding:'10px',

  "& .graph-section": {
    width: "95%",
    height: "48%",
    backgroundColor: "#fff",
    boxShadow: theme.shadows.shadow3,
    borderRadius: 10,
    margin:'0 auto',
  },
}));

export const Notification = styled('div')(({isEven,theme})=>({
  width:'100%',
  height:'fit-content',
  // backgroundColor:isEven?theme.palette.colors.primaryFaint:theme.palette.colors.secondaryFaint,
  padding:'10px 20px',
  display:'flex',
  flexDirection:'row',
  borderBottom:`1px solid ${theme.palette.colors.primary}`,
  alignItems:'center',
  '& .MuiAvatar-root':{
    marginRight:'10px'
  },
  '& .notification-text':{
    flex:1,
    // color:'white',
    '& .bold-text':{
      fontWeight:700
    }
  }
}))
