import React, { useState, useEffect } from "react";

import techmap from "../../helpers/tech.map";

//componsnts
import ProjectFeedPost from "../../components/projectFeedPost/projectFeedPost.component";
import Filter from "../../components/filter/filter.component";
import CreateProjectModal from "../../components/createProjectModal/createProjectModal.component";
import UserOverview from "../../components/userOverview/userOverview.component";
import {useSelector} from 'react-redux';
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
  const { getUserFeed, getAllUsers } = useUsers();
  const [currentFilters, setCurrentFilters] = useState([]);
  const [topUsers, setTopUsers] = useState([]);
  const {user:currentUser} = useSelector(state => state.auth);
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

    getAllUsers().then((res) => {
      console.log(res, "these are top users");
      const filteres = res.sort(
        (user1, user2) => user2.projects.length - user1.projects.length
      );
      const newFiltered = filteres.filter(u => u._id !== currentUser._id);
      setTopUsers(newFiltered.slice(0,7));
    });
  }, []);

  const filterProjects = (projects) => {
    if (currentFilters.length === 0) return projects;
    const newProjects = projects.filter((project) => {
      const stk = project.stack.map((k) => k.name);
      for (let k of currentFilters) {
        if (!stk.includes(k)) {
          return false;
        }
      }
      return true;
    });
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
            filterProjects(feedProjects).map((project) => (
              <ProjectFeedPost project={project} />
            ))
          ) : (
            <div>FOLLOW PEOPLE TO SEE THEIR PROJECTS IN YOUR FEED !!</div>
          )}
        </FeedPostSection>
        <RecommendationSection>
          <h3>TOP CODERS:</h3>
          {
            topUsers.length !== 0?
            topUsers.map(u => <UserOverview key={u._id} user={u}/>)
            :
            <div>NO USERS FOUND</div>
          }

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
