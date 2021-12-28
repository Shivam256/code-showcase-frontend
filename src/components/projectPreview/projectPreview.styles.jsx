import { ButtonBase, styled } from "@mui/material";

export const ProjectPreviewContainer = styled(ButtonBase)(({ spanNum, url }) => ({
  margin: "15px 10px",
  padding: 0,
  borderRadius: "10px",
  backgroundImage: `url('${url}')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  gridRowEnd: `span ${spanNum}`,
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "10px",
  transition: 'all 0.2s ease-in-out',
  "&:hover": {
    background: `linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 20.87%), url('${url}')`,
    backgroundPosition: "center",
    backgroundSize: "cover",

    "& h3": {
      opacity: 1,
    },
    // background:'red',
  },
  "& h3": {
    color: "white",
    opacity: 0,
  },
}));
