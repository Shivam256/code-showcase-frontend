import {styled} from '@mui/material';


export const FilterIcon = styled("div")(({theme})=>({
    width:'100px',
    height:'100px',
    borderRadius:'100%',
    backgroundColor:theme.palette.colors.background1,
    boxShadow:theme.shadows.shadow1,
    cursor:'pointer',
    display:'grid',
    placeItems:'center',
    margin:'0 10px',

    '& svg':{
        display:'block',
        position:'relative',
        transformOrigin:'center',
        transform:'scale(2.8)',
        zIndex:0,
    },

    '& .add-project':{
        transform:'scale(6)',
        color:theme.palette.colors.primary
    }
}))