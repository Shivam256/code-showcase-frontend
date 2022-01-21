import {Card, styled} from '@mui/material';


export const SettingsPage = styled("div")(()=>({
    width:'100%',
    height: '100%',
    // display: 'grid',
    // placeItems:'center',
    display: 'flex',
    flexDirection:'column',
    alignItems:'center'
}))

export const SettingCard = styled("div")(({theme})=>({
    width:'60%',
    height: 'fit-content',
    padding:'20px',
    // boxShadow:theme.shadows.shadow3,
    // backgroundColor:'red'

    '& h2':{
        marginBottom:50
    },
    '& .save-btn':{
        flaot:'right'
    }
}))