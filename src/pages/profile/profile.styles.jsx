import { Card, styled } from "@mui/material";


export const ProfilePage = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display:'flex',
  flexDirection:'column',
  alignItems:'center'
}));

export const UserProfileCard = styled(Card)(({theme})=>({
    width:'90%',
    height:'40vh',
    backgroundColor:'white',
    boxShadow:theme.shadows.shadow3,
    display:'flex',
    flexDirection:'row',

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
        
    }

}))

