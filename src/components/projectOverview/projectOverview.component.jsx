import React from "react";
//lib
import { Grid } from "@mui/material";
import { Icon } from "@iconify/react";
import {Context} from '../../layouts/main/MainLayout.component';
import { ProjectOverviewContainer } from "./projectOverview.styles";

const ProjectOverview = () => {
  const props = React.useContext(Context);

  return (
    <Grid item md={props.isFullScreen?3:4}>
      <ProjectOverviewContainer url="https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80">
        <Icon
          icon="clarity:bookmark-line"
          className="bookmarkIcon"
          color="#fff"
        />

        <div className="project-info-bar">
          <h3 className="projectName">Project Name</h3>
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
