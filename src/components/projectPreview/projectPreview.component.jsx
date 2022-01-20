import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

import { ProjectPreviewContainer } from "./projectPreview.styles";

const ProjectPreview = ({ imageUrl,project }) => {
  const [spanNumber, setspanNumber] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // const nums = [26, 33, 45, 40, 37];
    const nums = [19, 26, 22, 26, 30];
    const idx = Math.floor(Math.random() * nums.length);
    setspanNumber(nums[idx]);
  }, []);

  return (
    <ProjectPreviewContainer
      spanNum={spanNumber}
      url={project.images[0]}
      onClick={() => {
        navigate(`/project/${project._id}`);
      }}
    >
      <Icon icon="clarity:bookmark-line" className="bookmarkIcon" color="#fff"/>

      <div className="project-info-bar">
        <h3 className="projectName">{project.title}</h3>
        <span className="star-container">{project.overallRating || 0} <Icon icon="codicon:star-full" className="bookmarkIcon" color="#fff"/> </span>
      </div>
    </ProjectPreviewContainer>
  );
};

export default ProjectPreview;
