import { Avatar } from "@mui/material";
import React from "react";

import {
  ActivityPage,
  NotificationSection,
  GraphSection,
  Notification,
} from "./activity.styles";

const Activity = () => {
  return (
    <ActivityPage>
      <NotificationSection>
        <h3>Notifications:</h3>
        <div className="notification-container">
          <Notification>
            <Avatar src="https://images.unsplash.com/photo-1599110906885-b024c90c2773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <div className="notification-text">
              <span className="bold-text">username1</span> rated your project{" "}
              <span className="bold-text">project1</span>
            </div>
          </Notification>
          <Notification isEven>
            <Avatar src="https://images.unsplash.com/photo-1599110906885-b024c90c2773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <div className="notification-text">
              <span className="bold-text">username1</span> rated and commented on your project{" "}
              <span className="bold-text">project1</span>
            </div>
          </Notification>
          <Notification >
            <Avatar src="https://images.unsplash.com/photo-1599110906885-b024c90c2773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <div className="notification-text">
              <span className="bold-text">username1</span> started following you
            </div>
          </Notification>
        </div>
      </NotificationSection>
      <GraphSection>
        <div className="star-graph-section graph-section">rating graph</div>
        <div className="project-graph-section graph-section">project graph</div>
      </GraphSection>
    </ActivityPage>
  );
};

export default Activity;
