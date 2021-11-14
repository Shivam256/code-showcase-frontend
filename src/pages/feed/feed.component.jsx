import React from "react";

import { Card } from "@mui/material";

import Filter from "../../components/filter/filter.component";
import techmap from "../../helpers/tech.map";

import {FeedPage,FilterContainer} from './feed.styles';

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
    </FeedPage>
  );
};

export default Feed;
