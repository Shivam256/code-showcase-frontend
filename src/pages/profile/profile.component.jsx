import { Avatar, Rating } from "@mui/material";
import React from "react";

//utils
import techmap from "../../helpers/tech.map";

//cojponents
import Filter from "../../components/filter/filter.component";
import ProjectOverview from "../../components/projectOverview/projectOverview.component";


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
  return (
    <ProfilePage>
      <UserProfileCard>
        <div className="user-image-section">
          <Avatar src="https://www.nawpic.com/media/2020/levi-ackerman-nawpic-38.jpg" />
          <Rating name="read-only" value={5} readOnly size="large" />
        </div>
        <div className="user-data">
          <h2 className="username">Levi_2910</h2>
          <UserStats>
            <UserStat>
              <div className="num">10</div> <div className="txt">PROJECTS</div>{" "}
            </UserStat>
            <UserStat>
              <div className="num">10</div> <div className="txt">FOLLOWERS</div>{" "}
            </UserStat>{" "}
            <UserStat>
              <div className="num">10</div> <div className="txt">FOLLOWING</div>{" "}
            </UserStat>
          </UserStats>
          <div className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
            consectetur ipsa magni nulla aliquam totam quo. Vitae laudantium,
            maiores temporibus consectetur delectus voluptatum natus explicabo.
            Natus iure et praesentium sunt!
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
      <UserProjectsContainer container spacing={3} direction="row"  >
          <ProjectOverview/>
          <ProjectOverview/>
          <ProjectOverview/>
          <ProjectOverview/>
          <ProjectOverview/>
          <ProjectOverview/>

      </UserProjectsContainer>
    </ProfilePage>
  );
};

export default Profile;
