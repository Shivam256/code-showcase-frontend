import {styled} from '@mui/material';

export const FeedPage = styled("div")(()=>({
    width:'100%',
    height:'100%',
}))

export const FilterContainer = styled("div")(()=>({
    width:'100%',
    height:'120px',
    overflow:'auto',
    display:'flex',
    flexDirection:'column',
    flexWrap:'wrap',
    overflowX:'auto',
    // marginLeft:'50px',

    ' &::-webkit-scrollbar':{
        display:'none',
    }
}))

export const FeedSection = styled("div")(()=>({
    width: '100%',
    height:'75vh',
    padding:'30px',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    // backgroundColor:'red'
}))