import React, { useState } from "react";

import techmap from "../../helpers/tech.map";

//componsnts
import ProjectFeedPost from "../../components/projectFeedPost/projectFeedPost.component";
import Filter from "../../components/filter/filter.component";
import CreateProjectModal from "../../components/createProjectModal/createProjectModal.component";
import UserOverview from "../../components/userOverview/userOverview.component";

//styles
import {
  FeedPage,
  FeedSection,
  FilterContainer,
  FeedPostSection,
  RecommendationSection
} from "./feed.styles";

const Feed = () => {
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);

  const toggleCreateProjectModal = () => {
    setShowCreateProjectModal(!showCreateProjectModal);
  };
  const addProject = {
    name: "add",
    iconName: "carbon:add",
    imageUrl:
      "https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-512.png",
  };
  return (
    <FeedPage>
      <FilterContainer>
        <Filter
          tech={addProject}
          isAddProject={true}
          onClick={toggleCreateProjectModal}
        />
        {techmap.map((tech) => (
          <Filter tech={tech} key={tech.name} />
        ))}
      </FilterContainer>
      <FeedSection>
        <FeedPostSection>
        <ProjectFeedPost />
          <ProjectFeedPost />
          <ProjectFeedPost />

        </FeedPostSection>
        <RecommendationSection>
          <h3>TOP CODERS:</h3>
          <UserOverview/>
          <UserOverview/>
          <UserOverview/>

        </RecommendationSection>
      </FeedSection>
      <CreateProjectModal
        state={showCreateProjectModal}
        toggleModal={toggleCreateProjectModal}
      />
    </FeedPage>
  );
};

export default Feed;
