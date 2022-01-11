import { Card, Grid, styled } from "@mui/material";

export const ProjectImage = styled("div")(({ url }) => ({
  height: "35vh",
  maxWidth:'100%',
  // backgroundColor:'green'
  backgroundImage: `url('${url}')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius:10,
}));

export const ProjectSectionGrid = styled(Grid)(()=>({
    height:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
    paddingTop:20
}))

export const ProjectImagesContainer = styled("div")(()=>({
    width:'80%',
    height:'fit-content',
}))

export const ProjectDataContainer = styled(Card)(({theme})=>({
    flex:1,
    backgroundColor:'white',
    width:'80%',
    marginTop:50,
    boxShadow:theme.shadows.shadow3,
    padding:'20px',
    '& .MuiAvatar-root':{
        float:'right',
        transform:'scale(1.2)',
        // margin:'10px 10px 0 0',
    },
    // '& .MuiRating-icon':{
    //     transform:'scale(1.5)',
    //     margin:'0 5px',

    // }
}))
