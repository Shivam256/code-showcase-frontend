import React from "react";
//lib
import { Grid } from "@mui/material";
import { Icon } from "@iconify/react";
import {Context} from '../../layouts/main/MainLayout.component';
import { ProjectOverviewContainer } from "./projectOverview.styles";
import {useNavigate} from 'react-router-dom';

const ProjectOverview = ({project}) => {
  const props = React.useContext(Context);
  const navigate = useNavigate()

  return (
    <Grid item md={props.isFullScreen?3:4} onClick={()=>{navigate(`/project/${project._id}`)}}>
      <ProjectOverviewContainer url={project.images[0]}>
        {/* <Icon
          icon="clarity:bookmark-line"
          className="bookmarkIcon"
          color="#fff"
        /> */}

        <div className="project-info-bar">
          <h3 className="projectName">{project.title}</h3>
          <span className="star-container">
            3{" "}
            <Icon
              icon="codicon:star-full"
              className="bookmarkIcon"
              color="#fff"
            />{" "}
          </span>
        </div>
      </ProjectOverviewContainer>
    </Grid>
  );
};

export default ProjectOverview;
