import { Grid, styled } from "@mui/material";

export const ExplorePage = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ProjectsContainer = styled("div")(() => ({
  width: "100%",
  flex: 1,
  // backgroundColor:'red',
  margin: "20px",
//   margin: 0,
  padding: 0,
//   width: "80vw",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 250px)",
  gridAutoRows: "10px",
//   position: "absolute",
//   left: "50%",
//   transform: "translateX(-50%)",
  justifyContent: "center",
//   backgroundColor: "black",
overflowY:'scroll',
}));
