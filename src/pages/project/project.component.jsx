import React, { useEffect, useState } from "react";

//libs
import Slider from "react-slick";
import { Avatar, Grid, Rating, Tooltip } from "@mui/material";
import { Icon } from "@iconify/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router-dom";

//components
import CustomInput from "../../components/custom-input/customInput.componsnt";

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

  const location = useLocation();
  const { getProject } = useProjects();

  useEffect(() => {
    const id = location.pathname.slice(9);
    getProject(id).then((res) => {
      setProject(res);
    });
  }, [location]);

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
              <Rating name="read-only" value={3} readOnly size="large" />
              <div className="description">
                {project.description}
              </div>
            </ProjectDataContainer>
          </ProjectSectionGrid>
          <ProjectSectionGrid item md={6}>
            <StackContainer>
              <h3>STACK:</h3>
              <div className="main-stack-container">
                {techmap.slice(0, 4).map((tech) => (
                  <Stack>
                    <Icon icon={tech.iconName} height={60} width={60} />
                  </Stack>
                ))}
              </div>
            </StackContainer>
            <LinksContainer>
              <h3>LINKS:</h3>
              <div className="main-link-container">
                <ProjectLink href="/">
                  <Tooltip title="Github" placement="bottom" arrow>
                    <Icon icon="akar-icons:github-fill" color="#000" />
                  </Tooltip>
                </ProjectLink>

                <ProjectLink href="/">
                  <Icon icon="logos:gitlab" />
                </ProjectLink>
                <ProjectLink href="/">
                  <Icon icon="mdi:web" />
                </ProjectLink>
                <ProjectLink href="/">
                  <Icon icon="ant-design:code-sandbox-outlined" color="#000" />
                </ProjectLink>
                <ProjectLink href="/">
                  <Icon icon="akar-icons:codepen-fill" color="#000" />
                </ProjectLink>
              </div>
            </LinksContainer>
            <RatingsContainer>
              <h3>COMMENTS:</h3>
              <CustomInput
                variant="standard"
                label="Add your comment."
                fullSize
              />
            </RatingsContainer>
          </ProjectSectionGrid>
        </>
      )}
    </Grid>
  );
};

export default Project;
