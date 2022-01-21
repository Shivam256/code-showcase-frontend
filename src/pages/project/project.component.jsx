import React, { useEffect, useState } from "react";

//libs
import Slider from "react-slick";
import { Avatar, Grid, Rating, Tooltip, Popover, Button } from "@mui/material";
import { Icon } from "@iconify/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import useProjects from "../../hooks/useProjects";
//components
import CustomInput from "../../components/custom-input/customInput.componsnt";
import UserRating from "../../components/rating/rating.component";
import useProjects from "../../hooks/useProjects";

//styled
import {
  ProjectImage,
  ProjectImagesContainer,
  ProjectDataContainer,
  ProjectSectionGrid,
  StackContainer,
  Stack,
  LinksContainer,
  RatingsContainer,
  ProjectLink,
} from "./project.styles";
import techmap from "../../helpers/tech.map";
import CustomButton from "../../components/custom-button/customButton.component";

const Project = () => {
  const [project, setProject] = useState(null);
  const [val, setVal] = useState(0);
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [ratingData, setRatingData] = useState({
    comment: "",
    rating: 0,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [iseProjectAuthor, setIsProjectAuthor] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { user } = useSelector((state) => state.auth);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const location = useLocation();
  const { getProject, postComment, deleteProject } = useProjects();

  const getStackArray = (names) => {
    const arr = techmap.filter((a) => {
      return names.some((l) => l.name === a.name);
    });
    return arr;
  };

  const navigate = useNavigate();

  useEffect(() => {
    const id = location.pathname.slice(9);
    getProject(id).then((res) => {
      setProject(res);
      console.log(res);
    });
  }, [location, val]);

  const handlePostComment = () => {
    console.log(ratingData);
    postComment(project._id, ratingData);
    setRatingData({
      comment: "",
      rating: 0,
    });
    setVal(val + 1);
  };

  const handleDeleteProject = () => {
    deleteProject(project._id);
    navigate("/feed");
  };

  useEffect(() => {
    if (project !== null && user !== null) {
      console.log(project._id);
      console.log(user.projects);
    }
  }, [user]);

  

  return (
    <Grid container sx={{ width: "100%", height: "100%" }}>
      {project === null ? (
        <div>loading ...</div>
      ) : (
        <>
          <ProjectSectionGrid item md={6}>
            <ProjectImagesContainer>
              <Slider {...settings}>
                {project.images.map((img) => (
                  <ProjectImage url={img} />
                ))}
              </Slider>
            </ProjectImagesContainer>
            <ProjectDataContainer>
              <Avatar
                src={project.author.profilePic}
                onClick={handleClick}
                sx={{ cursor: "pointer" }}
              />
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
              >
                <Link to={`/profile/${project.author._id}`}>
                  {project.author.username}
                </Link>
              </Popover>
              <h2>{project.title}</h2>
              <Rating
                name="read-only"
                value={project.overallRating || 0}
                readOnly
                size="large"
              />
              <div className="description">{project.description}</div>
              {/* <Button>DELETE</Button> */}
            </ProjectDataContainer>
          </ProjectSectionGrid>
          <ProjectSectionGrid item md={6}>
            <StackContainer>
              <h3>STACK:</h3>
              <div className="main-stack-container">
                {getStackArray(project.stack).map((tech) => (
                  <Stack>
                    <Tooltip title={tech.name}>
                      <Icon icon={tech.iconName} height={60} width={60} />
                    </Tooltip>
                  </Stack>
                ))}
              </div>
            </StackContainer>
            <LinksContainer>
              <h3>LINKS:</h3>
              <div className="main-link-container">
                {project.links.github ? (
                  <ProjectLink href="/">
                    <a href={project.links.github} target="_blank">
                      <Tooltip title="Github" placement="bottom" arrow>
                        <Icon icon="akar-icons:github-fill" color="#000" />
                      </Tooltip>
                    </a>
                  </ProjectLink>
                ) : null}
                {project.links.gitlab ? (
                  <ProjectLink href="/">
                    <a href={project.links.gitlab} target="_blank">
                      <Tooltip title="Github" placement="bottom" arrow>
                        <Icon icon="logos:gitlab" />
                      </Tooltip>
                    </a>
                  </ProjectLink>
                ) : null}
                {project.links.web ? (
                  <ProjectLink href="/">
                    <a href={project.links.web} target="_blank">
                      <Tooltip title="Github" placement="bottom" arrow>
                        <Icon icon="mdi:web" />
                      </Tooltip>
                    </a>
                  </ProjectLink>
                ) : null}
                {project.links.codesandbox ? (
                  <ProjectLink href="/">
                    <a href={project.links.codesandbox} target="_blank">
                      <Tooltip title="Github" placement="bottom" arrow>
                        <Icon
                          icon="ant-design:code-sandbox-outlined"
                          color="#000"
                        />
                      </Tooltip>
                    </a>
                  </ProjectLink>
                ) : null}
                {project.links.codepen ? (
                  <ProjectLink href="/">
                    <a href={project.links.codepen} target="_blank">
                      <Tooltip title="Github" placement="bottom" arrow>
                        <Icon icon="akar-icons:codepen-fill" color="#000" />
                      </Tooltip>
                    </a>
                  </ProjectLink>
                ) : null}
              </div>
            </LinksContainer>
            <RatingsContainer>
              <h3>COMMENTS:</h3>
              <CustomInput
                variant="standard"
                label="Add your comment."
                fullSize
                value={ratingData.comment}
                onChange={(e) => {
                  setRatingData({ ...ratingData, comment: e.target.value });
                }}
              />
              <Rating
                size="large"
                value={ratingData.rating}
                onChange={(ev, nv) => {
                  setRatingData({ ...ratingData, rating: nv });
                }}
              />
              <CustomButton sx={{ float: "right" }} onClick={handlePostComment}>
                POST
              </CustomButton>
              <div className="rating-section">
                {project.ratings
                  .slice()
                  .reverse()
                  .map((a) => (
                    <UserRating rating={a} />
                  ))}
              </div>
            </RatingsContainer>
          </ProjectSectionGrid>
        </>
      )}
    </Grid>
  );
};

export default Project;
