import { Card, Grid, styled } from "@mui/material";


export const ProfilePage = styled("div")(() => ({
  width: "100%",

  display:'flex',
  flexDirection:'column',
  alignItems:'center',
}));

export const UserProfileCard = styled(Card)(({theme})=>({
    width:'90%',
    height:'40vh',
    backgroundColor:'white',
    boxShadow:theme.shadows.shadow3,
    display:'flex',
    flexDirection:'row',
    marginBottom:30,

    '& .user-image-section':{
        width:'30%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',

        '& .MuiAvatar-root':{
            width:210,
            height:210
        }
    },
    '& .user-data':{
        flex:1,
        display:'flex',
        flexDirection:'column',
        padding:'30px 5px',
        justifyContent:'space-between',

        '& .username':{
            fontSize:'1.5em'
        }
        
    }

}))

export const UserStats = styled("div")(()=>({
    width:'100%',
    height:'fit-content',
    display:'flex',
    flexDirection:'row'
}))

export const UserStat = styled("div")(()=>({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginRight:30,

    '& .num':{
        fontSize:'2.5em'
    }
}))


export const UserSkillSection = styled("div")(()=>({
    width:'90%',
    height:'fit-content',
    marginBottom:20,
    '& .main-skill-container':{
        marginTop:10,
        width: "100%",
        height: "120px",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        overflowX: "auto",
        // marginLeft:'50px',
      
        " &::-webkit-scrollbar": {
          display: "none",
        },
    }
}))

export const UserProjectsContainer = styled(Grid)(()=>({
    width:'90%',
    height:'fit-content',
}))