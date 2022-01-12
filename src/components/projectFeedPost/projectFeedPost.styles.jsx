import {styled, Card, Button} from '@mui/material';
import {Link} from 'react-router-dom';

export const Post = styled(Card)(({theme})=>({
    width:'35vw',
    height: '68vh',
    boxShadow:theme.shadows.shadow3,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    margin:'0 0 40px 0',
}))

export const Header = styled("div")(()=>({
    width:'100%',
    height:'6vh',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    padding:'0 20px',
}))

export const PostImage = styled("div")(({url})=>({
    width:'40vw',
    height:'44vh',
    // backgroundColor:'green'
    backgroundImage:`url('${url}')`,
    backgroundPosition:'center',
    backgroundSize:'cover',
}))

export const UsernameLink = styled(Link)(({theme})=>({
    color:theme.palette.colors.secondary,
    textDecoration:'none',
    fontWeight:700,
    marginLeft:20
}))

export const ProjectInfo = styled("div")(({theme})=>({
    width:'100%',
    height:'12vh',
    // backgroundColor:'red',
    justifySelf:'flex-end',
    padding:'5px 10px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',

    '& .project-overview':{
        width:'100%',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',

        '& .project-name':{
            fontWeight:700,
            fontSize:'1.3em',
            // letterSpacing:1

        },
        '& .MuiRating-icon':{
            fontSize:'1.2em'
        }
    }
}))

export const ProjectButton = styled(Button)(({theme})=>({
    width:'100%',
    height:'fit-content',
    color:'#fff',
    fontWeight:800,
    borderRadius:5,
    letterSpacing:2,
    ...theme.palette.gradients.gradient1
}))