import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectPreviewContainer } from "./projectPreview.styles";

const ProjectPreview = ({ imageUrl }) => {
  const [spanNumber, setspanNumber] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const nums = [26, 33, 45, 40, 37];
    const idx = Math.floor(Math.random() * nums.length);
    setspanNumber(nums[idx]);
  }, []);

  return (
    <ProjectPreviewContainer spanNum={spanNumber} url={imageUrl} onClick={()=>{navigate("/project/someid")}}>
      <h3 className="projectName">Project Name</h3>
    </ProjectPreviewContainer>
  );
};

export default ProjectPreview;
