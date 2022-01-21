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
import {useNavigate} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Rating } from "@mui/material";

const ProjectFeedPost = ({ project }) => {
  const navigate = useNavigate();
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleClick = () => {
    navigate(`/project/${project._id}`);
  }
  return (
    <Post>
      <div>
        <Header>
          <Avatar src={project.author.profilePic} />
          <UsernameLink to={`/profile/${project.author._id}`}>{project.author.username}</UsernameLink>
        </Header>
        <Slider {...settings}>
          {project.images.map((image) => (
            <PostImage url={image} />
          ))}
        </Slider>
      </div>
      <ProjectInfo>
        <div className="project-overview">
          <span className="project-name">{project.title}</span>
          <Rating name="read-only" value={3} readOnly />
        </div>
        <ProjectButton onClick={handleClick}>VIEW</ProjectButton>
      </ProjectInfo>
    </Post>
  );
};

export default ProjectFeedPost;
