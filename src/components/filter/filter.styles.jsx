import {styled} from '@mui/material';


export const FilterIcon = styled("div")(({theme,selected})=>({
    width:'100px',
    height:'100px',
    borderRadius:'100%',
    backgroundColor:theme.palette.colors.background1,
    boxShadow:theme.shadows.shadow1,
    cursor:'pointer',
    display:'grid',
    placeItems:'center',
    margin:'0 10px',
    transition: 'all 0.1s ease-in',
    border:selected?`5px solid ${theme.palette.colors.primary}`:null,

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
    },
    '&:hover':{
        border:'5px solid',
        borderColor:theme.palette.colors.primary,
    }
}))