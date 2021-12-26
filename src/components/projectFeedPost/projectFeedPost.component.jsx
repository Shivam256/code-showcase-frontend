import React from "react";

import {
  Header,
  Post,
  PostImage,
  ProjectButton,
  ProjectInfo,
  UsernameLink,
} from "./projectFeedPost.styles";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar ,Rating} from "@mui/material";

const ProjectFeedPost = () => {
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
    <Post>
      <div>
        <Header>
          <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <UsernameLink to="#">jessica_1411</UsernameLink>
        </Header>
        <Slider {...settings}>
          <PostImage url="https://mercherworld.com/wp-content/uploads/2021/08/1628511633-instagram.jpe" />
          <PostImage url="https://mir-s3-cdn-cf.behance.net/project_modules/fs/a8f1b467595609.5b3f01fdb77ae.png" />
          <PostImage url="https://cdn.dribbble.com/users/226368/screenshots/6580622/instagram_redesign_concept_overlapstudio_4x.png?compress=1&resize=400x300" />
        </Slider>
      </div>
      <ProjectInfo>
          <div className="project-overview">
              <span  className="project-name">Instagram</span>
              <Rating name="read-only" value={3} readOnly />
          </div>
          <ProjectButton>
              VIEW
          </ProjectButton>
      </ProjectInfo>
    </Post>
  );
};

export default ProjectFeedPost;
