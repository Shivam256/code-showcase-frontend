import { Card, Grid, styled } from "@mui/material";
import {Link} from 'react-router-dom';

const cardStyles = (theme) => ({
  backgroundColor: "white",
  width: "90%",
  boxShadow: theme.shadows.shadow3,
  padding: "20px",
});

export const ProjectImage = styled("div")(({ url }) => ({
  height: "35vh",
  maxWidth: "100%",
  // backgroundColor:'green'
  backgroundImage: `url('${url}')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: 10,
}));

export const ProjectSectionGrid = styled(Grid)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: 20,
}));

export const ProjectImagesContainer = styled("div")(() => ({
  width: "90%",
  height: "fit-content",
}));

export const ProjectDataContainer = styled(Card)(({ theme }) => ({
  flex: 1,
  ...cardStyles(theme),
  
  marginTop: 50,

  "& .MuiAvatar-root": {
    float: "right",
    transform: "scale(1.2)",
    // margin:'10px 10px 0 0',
  },
  // '& .MuiRating-icon':{
  //     transform:'scale(1.5)',
  //     margin:'0 5px',

  // }
  "& .description": {
    color: "#868686",
  },

}));

export const StackContainer = styled(Card)(({ theme }) => ({
  ...cardStyles(theme),
  maxHeight:'20vh',
  display:'flex',
  flexDirection:'column',
  marginBottom:20,

  "& .main-stack-container": {
    height:'90%',
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    overflowX: "auto",
    justifyContent:'center',

    '&::-webkit-scrollbar':{
      display:'none'
    }
  },

}));

export const Stack = styled("div")(()=>({
  width:'80px',
  height:'80px',
  display:'grid',
  placeItems:'center',
 
}))

export const LinksContainer = styled(Card)(({theme})=>({
  ...cardStyles(theme),
  height:'20vh',
  marginBottom:20,
  '& .main-link-container':{
    display:'flex',
    flexDirection:'row',
  }
}))

export const ProjectLink = styled("a")(()=>({
  width:80,
  height:80,
  display:'grid',
  placeItems:'center',
  '& svg':{
    width:40,
    height:40
  }

}))

export const RatingsContainer = styled(Card)(({theme})=>({
  ...cardStyles(theme),
  flex:1,

  '& .rating-section':{
    width:'100%',
    height:'fit-content',
    maxHeight:'50%',
    overflowY:'scroll',
    marginTop:15,
    '&::-webkit-scrollbar':{
      display:'none'
    }
  }

}))