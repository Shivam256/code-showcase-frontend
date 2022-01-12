import { Avatar,Rating } from "@mui/material";
import React from "react";

//styles
import { ProfilePage,UserProfileCard } from "./profile.styles";

const Profile = () => {
  return <ProfilePage>
      <UserProfileCard>
          <div className="user-image-section">
              <Avatar src="https://www.nawpic.com/media/2020/levi-ackerman-nawpic-38.jpg"/>
              <Rating name="read-only" value={5} readOnly size="large" />
          </div>
          <div className="user-data">
              <h2>Levi_2910</h2>
          </div>
      </UserProfileCard>
  </ProfilePage>;
};

export default Profile;
