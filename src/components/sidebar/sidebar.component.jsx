import React, { useState } from "react";

//components
import IconButton from "../icon-button/icon-button.component";

//libs
import { Icon } from "@iconify/react";
import { Avatar, useTheme, Rating, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

//styled
import {
  SidebarContainer,
  SidebarDrawer,
  MainSidebar,
  SidebarBtnContainer,
  LogoutBtn,
} from "./sidebar.styles";

const SidebarBtn = ({ url, children }) => {
  const { pathname } = useLocation();
  return (
    <SidebarBtnContainer selected>
      <Link to={url} selected={pathname === url}>
        {children}
      </Link>
    </SidebarBtnContainer>
  );
};

const Sidebar = ({ toggleScreenState }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const theme = useTheme();

  const [user, setUser] = useState({
    profilePic:
      "https://www.nawpic.com/media/2020/levi-ackerman-nawpic-38.jpg",
    username: "Levi_2910",
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    toggleScreenState();
  };

  return (
    <SidebarContainer theme={theme}>
      <IconButton onClick={toggleSidebar}>
        <Icon
          icon="ci:menu-alt-03"
          fontSize={"2em"}
          color={theme.palette.colors.secondary}
        />
      </IconButton>
      <SidebarDrawer open={isSidebarOpen} anchor="left" onOpen={toggleSidebar}>
        <MainSidebar>
          <Icon
            icon="eva:close-circle-outline"
            className="close-icon"
            onClick={toggleSidebar}
          />
          <div className="user-info">
            <Avatar src={user.profilePic} />
            <div className="username">{user.username}</div>
            <Rating name="read-only" value={5} readOnly size="large" />
          </div>
          <div className="sidebar-btns">
            <SidebarBtn url="/feed">
              <Icon
                icon="fluent:broad-activity-feed-16-regular"
                color="#7209B7"
              />{" "}
              FEED
            </SidebarBtn>
            <SidebarBtn url="/explore">
              <Icon icon="ic:outline-explore" color="#7209B7" />
              EXPLORE
            </SidebarBtn>
            <SidebarBtn url="/activity">
              <Icon icon="bi:activity" color="#7209B7" />
              ACTIVITY
            </SidebarBtn>
            <SidebarBtn url="/messages">
              <Icon icon="jam:messages" color="#7209B7" />
              MESSAGES
            </SidebarBtn>
            <SidebarBtn url="/profile">
              <Icon icon="iconoir:profile-circled" color="#7209B7" />
              PROFILE
            </SidebarBtn>
            <SidebarBtn url="/settings">
              <Icon icon="ci:settings" color="#7209B7" />
              SETTINGS
            </SidebarBtn>
          </div>

          <LogoutBtn>
            {" "}
            <Icon icon="ri:logout-box-line" color="#7209B7" />
            LOGOUT
          </LogoutBtn>
        </MainSidebar>
      </SidebarDrawer>
    </SidebarContainer>
  );
};

export default Sidebar;
