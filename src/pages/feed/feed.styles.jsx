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

    ' &::-webkit-scrollbar':{
        display:'none',
    }
}))