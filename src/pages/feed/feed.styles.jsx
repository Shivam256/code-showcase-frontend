import { Card, styled } from "@mui/material";

export const FeedPage = styled("div")(() => ({
  width: "100%",
  height: "100%",
}));

export const FilterContainer = styled("div")(() => ({
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
}));

export const FeedSection = styled("div")(() => ({
  width: "100%",
  height: "75vh",
  padding: "30px 30px 10px 30px",
  display: "flex",
  flexDirection: "row",
  // justifyContent:'space-between',

  // backgroundColor:'red'
}));

export const FeedPostSection = styled("div")(() => ({
  width: "fit-content",
  maxHeight: "75vh",
  // backgroundColor:'red',
  overflowY: "scroll",
  padding: "0px 20px",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

export const RecommendationSection = styled(Card)(({ theme }) => ({
  width: "30%",
  height: "fit-content",

  backgroundColor: "white",
  boxShadow: theme.shadows.shadow3,
  padding: "20px",
  marginLeft: 100,
}));
