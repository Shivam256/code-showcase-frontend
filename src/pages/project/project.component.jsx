import React from "react";

//libs
import Slider from "react-slick";
import { Avatar, Grid ,Rating} from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//styled
import {
  ProjectImage,
  ProjectImagesContainer,
  ProjectDataContainer,
  ProjectSectionGrid,
} from "./project.styles";

const Project = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Grid container sx={{ width: "100%", height: "100%" }}>
      <ProjectSectionGrid item md={6}>
        <ProjectImagesContainer>
          <Slider {...settings}>
            <ProjectImage url="https://mercherworld.com/wp-content/uploads/2021/08/1628511633-instagram.jpe" />
            <ProjectImage url="https://mir-s3-cdn-cf.behance.net/project_modules/fs/a8f1b467595609.5b3f01fdb77ae.png" />
            <ProjectImage url="https://cdn.dribbble.com/users/226368/screenshots/6580622/instagram_redesign_concept_overlapstudio_4x.png?compress=1&resize=400x300" />
          </Slider>
        </ProjectImagesContainer>
        <ProjectDataContainer>
          <Avatar src="https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />

          <h2>Instagram</h2>
          <Rating name="read-only" value={3} readOnly size="large" />
          <div className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat repellendus esse nostrum deserunt iste laboriosam, dolor soluta eum excepturi fugit vel, numquam quam recusandae, consequatur facere. Beatae suscipit eligendi quos.
              Id delectus, fugit ea soluta asperiores voluptas facere magni est quod accusantium facilis? Dolorem consequatur facilis harum porro atque obcaecati quam assumenda aliquid, at labore aperiam maxime animi, cum mollitia.
          </div>
        </ProjectDataContainer>
      </ProjectSectionGrid>
      <ProjectSectionGrid item md={6}>
        section 2
      </ProjectSectionGrid>
    </Grid>
  );
};

export default Project;
