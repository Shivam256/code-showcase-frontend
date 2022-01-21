import React, { useState, useEffect } from "react";

import techmap from "../../helpers/tech.map";

//componsnts
import ProjectFeedPost from "../../components/projectFeedPost/projectFeedPost.component";
import Filter from "../../components/filter/filter.component";
import CreateProjectModal from "../../components/createProjectModal/createProjectModal.component";
import UserOverview from "../../components/userOverview/userOverview.component";

import useUsers from "../../hooks/useUsers";
//styles
import {
  FeedPage,
  FeedSection,
  FilterContainer,
  FeedPostSection,
  RecommendationSection,
} from "./feed.styles";

const Feed = () => {
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
  const [feedProjects, setFeedProjects] = useState([]);
  const { getUserFeed } = useUsers();
  const [currentFilters, setCurrentFilters] = useState([]);

  const handleAddFilter = (name) => {
    if (currentFilters.some((a) => a === name)) {
      const newFilters = currentFilters.filter((a) => a !== name);
      setCurrentFilters(newFilters);
    } else {
      setCurrentFilters([...currentFilters, name]);
    }
  };

  const toggleCreateProjectModal = () => {
    setShowCreateProjectModal(!showCreateProjectModal);
  };
  const addProject = {
    name: "add",
    iconName: "carbon:add",
    imageUrl:
      "https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-512.png",
  };

  useEffect(() => {
    getUserFeed().then((res) => {
      console.log(res, "i am here");

      setFeedProjects(res);
    });
  }, []);

  const filterProjects = (projects) => {
    if(currentFilters.length === 0) return projects;
    const newProjects = projects.filter(project =>{
      const stk = project.stack.map(k => k.name);
      for(let k of currentFilters){
        if(!stk.includes(k)){
          return false;
        }
      }
      return true
    })
    return newProjects;
  };

  return (
    <FeedPage>
      <FilterContainer>
        <Filter
          tech={addProject}
          isAddProject={true}
          handleAdd={toggleCreateProjectModal}

        />
        {techmap.map((tech) => (
          <Filter
            tech={tech}
            key={tech.name}
            handleAdd={handleAddFilter}
            selected={currentFilters.some((a) => a === tech.name)}
          />
        ))}
      </FilterContainer>
      <FeedSection>
        <FeedPostSection>
          {feedProjects.length !== 0 ? (
            filterProjects(feedProjects).map((project) => <ProjectFeedPost project={project} />)
          ) : (
            <div>FOLLOW PEOPLE TO SEE THEIR PROJECTS IN YOUR FEED !!</div>
          )}
        </FeedPostSection>
        <RecommendationSection>
          <h3>TOP CODERS:</h3>
          <UserOverview />
          <UserOverview />
          <UserOverview />
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
