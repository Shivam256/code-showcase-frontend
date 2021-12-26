import React from "react";
import Filter from "../../components/filter/filter.component";
import techmap from "../../helpers/tech.map";
import ProjectFeedPost from "../../components/projectFeedPost/projectFeedPost.component";
import { FeedPage, FeedSection, FilterContainer } from "./feed.styles";

const Feed = () => {
  const addProject = {
    name: "add",
    iconName: "carbon:add",
    imageUrl:
      "https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-512.png",
  };
  return (
    <FeedPage>
      <FilterContainer>
        <Filter tech={addProject} isAddProject={true} onClick={() => {}} />
        {techmap.map((tech) => (
          <Filter tech={tech} key={tech.name} />
        ))}
      </FilterContainer>
      <FeedSection>
        <ProjectFeedPost />
        <div>this is a recommendataion</div>
      </FeedSection>
    </FeedPage>
  );
};

export default Feed;
