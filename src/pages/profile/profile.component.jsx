import { Avatar, Rating } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//utils
import techmap from "../../helpers/tech.map";

//cojponents
import Filter from "../../components/filter/filter.component";
import ProjectOverview from "../../components/projectOverview/projectOverview.component";

import useUsers from "../../hooks/useUsers";

//styles
import {
  ProfilePage,
  UserProfileCard,
  UserStats,
  UserStat,
  UserSkillSection,
  UserProjectsContainer,
} from "./profile.styles";

const Profile = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  const { getUser } = useUsers();

  useEffect(() => {
    const id = location.pathname.slice(9);
    getUser(id).then((res) => {
      setUser(res);
      console.log(res, "in the profile page");
    });
  }, [location]);

  return (
    <ProfilePage>
      {user === null ? (
        <div>loading....</div>
      ) : (
        <>
          <UserProfileCard>
            <div className="user-image-section">
              <Avatar src="https://www.nawpic.com/media/2020/levi-ackerman-nawpic-38.jpg" />
              <Rating name="read-only" value={5} readOnly size="large" />
            </div>
            <div className="user-data">
              <div>
                <h2 className="username">{user.username}</h2>
                <UserStats>
                  <UserStat>
                    <div className="num">{user.projects.length || 0}</div>{" "}
                    <div className="txt">PROJECTS</div>{" "}
                  </UserStat>
                  <UserStat>
                    <div className="num">0</div>{" "}
                    <div className="txt">FOLLOWERS</div>{" "}
                  </UserStat>{" "}
                  <UserStat>
                    <div className="num">0</div>{" "}
                    <div className="txt">FOLLOWING</div>{" "}
                  </UserStat>
                </UserStats>
              </div>
              <div className="description">
                {user.description ? user.description : null}
              </div>
            </div>
          </UserProfileCard>
          <UserSkillSection>
            <h3>SKILLS:</h3>
            <div className="main-skill-container">
              {techmap.map((tech) => (
                <Filter tech={tech} key={tech.name} />
              ))}
            </div>
          </UserSkillSection>
          <UserProjectsContainer container spacing={3} direction="row">
            {
              user.projects.map(project =><ProjectOverview project={project}/>)
            }
            {/* <ProjectOverview />
            <ProjectOverview />
            <ProjectOverview />
            <ProjectOverview />
            <ProjectOverview />
            <ProjectOverview /> */}
          </UserProjectsContainer>
        </>
      )}
    </ProfilePage>
  );
};

export default Profile;
