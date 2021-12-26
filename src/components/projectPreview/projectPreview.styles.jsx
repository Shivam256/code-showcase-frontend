import { styled } from "@mui/material";

export const ProjectPreviewContainer = styled("div")(({ spanNum, url }) => ({
  margin: "15px 10px",
  padding: 0,
  borderRadius: "16px",
  backgroundImage: `url('${url}')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  gridRowEnd: `span ${spanNum}`,
  "&:hover": {
    background: `linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 20.87%), url('${url}')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    // background:'red',
  },
}));
