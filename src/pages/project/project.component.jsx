import React, { useEffect, useState } from "react";

//libs
import Slider from "react-slick";
import { Avatar, Grid, Rating, Tooltip } from "@mui/material";
import { Icon } from "@iconify/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation, Link } from "react-router-dom";

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
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [ratingData,setRatingData] = useState({
    comment:"",
    rating:0,
  })

  const location = useLocation();
  const { getProject,postComment } = useProjects();

  const getStackArray = (names) => {
    const arr = techmap.filter((a) => {
      return names.some((l) => l.name === a.name);
    });
    return arr;
  };

  const handlePostComment = () =>{
    console.log(ratingData);
    postComment(project._id,ratingData);
    setRatingData({
      comment:"",
      rating:0
    })
  }

  useEffect(() => {
    const id = location.pathname.slice(9);
    getProject(id).then((res) => {
      setProject(res);
      console.log(res);
    });
  }, [location,handlePostComment]);



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
              <Avatar src="https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />

              <h2>{project.title}</h2>
              <Rating name="read-only" value={project.overallRating || 0} readOnly size="large" />
              <div className="description">{project.description}</div>
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
                onChange={(e) => {setRatingData({...ratingData,comment:e.target.value})}}
              />
              <Rating size="large" value={ratingData.rating} onChange={(ev,nv)=>{setRatingData({...ratingData,rating:nv})}}/>
              <CustomButton sx={{float:'right'}} onClick={handlePostComment}>POST</CustomButton>
              <div className="rating-section">
                {project.ratings.slice().reverse().map((a) => (
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
