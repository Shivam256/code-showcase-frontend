import { styled } from "@mui/material";

export const ProjectOverviewContainer = styled("div")(({ url }) => ({
  width: "100%",
  height: "40vh",
  backgroundImage: `url('${url}')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: 10,
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "10px",
  "&:hover": {
    background: `linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 20.87%), url('${url}')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    "& .bookmarkIcon": {
      opacity: 1,
    },
    "& .project-info-bar": {
      opacity: 1,
    },

    // background:'red',
  },
  "& h3": {
    color: "white",
  },
  "& .bookmarkIcon": {
    alignSelf: "flex-end",
    transform: "scale(1.5)",
    opacity: 0,
  },
  "& .project-info-bar": {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    opacity: 0,
  },
  "& .star-container": {
    color: "#fff",
    fontSize: "1.2em",
    "& svg": {
      transform: "scale(1.3)",
    },
  },
}));
