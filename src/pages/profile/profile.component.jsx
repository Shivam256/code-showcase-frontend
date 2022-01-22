import { Avatar, Rating } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
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
import CustomButton from "../../components/custom-button/customButton.component";

const Profile = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [iseFollowing, setIsFollowing] = useState(false);
  const { getUser, followUser } = useUsers();

  const { user: currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user !== null && currentUser !== null) {
      setIsAuthUser(user._id === currentUser._id);
      console.log(user._id, currentUser._id);
    }
  }, [user, currentUser]);

  useEffect(() => {
    const id = location.pathname.slice(9);
    getUser(id).then((res) => {
      setUser(res);
      console.log(res, "in the profile page");
    });
  }, [location]);

  const getUserSkillSet = (projects) => {
    const skills = [];
    projects.forEach((project) => {
      for (let skill of project.stack) {
        if (!skills.some((a) => a === skill)) {
          skills.push(skill);
        }
      }
    });

    console.log(skills);

    const arr = techmap.filter((a) => {
      return skills.some((l) => l.name === a.name);
    });
    return arr;
  };

  const handleIsFollowing = () => {
    console.log(currentUser.following, "this is user following");

    if (user !== null) {
      const res = currentUser.following.some((a) => a._id === user._id);
      console.log(res, "this is the result!");
      setIsFollowing(res);
      return res;
    }
  };

  useEffect(() => {
    handleIsFollowing();
  }, [user]);

  const handleFollow = () => {
    followUser(user._id);
    setIsFollowing(true);
  };

  return (
    <ProfilePage>
      {user === null ? (
        <div>loading....</div>
      ) : (
        <>
          <UserProfileCard>
            <div className="user-image-section">
              <Avatar src={user.profilePic} />
              {/* <Rating name="read-only" value={5} readOnly size="large" /> */}
            </div>
            <div className="user-data">
              <div>
                <h2 className="username">
                  {user.username}
                  {isAuthUser ? null : (
                    <CustomButton
                      sx={{ marginLeft: 5, padding: "2px 15px" }}
                      onClick={handleFollow}
                    >
                      {iseFollowing ? "FOLLOWING" : "FOLLOW"}
                    </CustomButton>
                  )}
                </h2>
                <UserStats>
                  <UserStat>
                    <div className="num">{user.projects.length || 0}</div>{" "}
                    <div className="txt">PROJECTS</div>{" "}
                  </UserStat>
                  <UserStat>
                    <div className="num">{user.followers.length || 0}</div>{" "}
                    <div className="txt">FOLLOWERS</div>{" "}
                  </UserStat>{" "}
                  <UserStat>
                    <div className="num">{user.following.length || 0}</div>{" "}
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
            {user.projects.length !== 0 ? (
              <>
                <h3>SKILLS:</h3>

                <div className="main-skill-container">
                  {getUserSkillSet(user.projects).map((skill) => (
                    <Filter tech={skill} key={skill.name} />
                  ))}
                </div>
              </>
            ) : (
              <div>CREATE PROJECTS TO GET SKILLS!</div>
            )}
          </UserSkillSection>
          <UserProjectsContainer container spacing={3} direction="row">
            {user.projects.map((project) => (
              <ProjectOverview project={project} />
            ))}
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
