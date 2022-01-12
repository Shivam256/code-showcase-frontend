import React from "react";

import {
  ActivityPage,
  NotificationSection,
  GraphSection,
} from "./activity.styles";

const Activity = () => {
  return (
    <ActivityPage>
      <NotificationSection>Notifications</NotificationSection>
      <GraphSection>
        <div className="star-graph-section graph-section">rating graph</div>
        <div className="project-graph-section graph-section">project graph</div>
      </GraphSection>
    </ActivityPage>
  );
};

export default Activity;
