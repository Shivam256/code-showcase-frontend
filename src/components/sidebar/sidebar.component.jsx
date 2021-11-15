import React, { useState } from "react";

//components
import IconButton from "../icon-button/icon-button.component";

//libs
import { Icon } from "@iconify/react";
import { Avatar, useTheme, Rating, Button } from "@mui/material";
import { Link } from "react-router-dom";

//styled
import {
  SidebarContainer,
  SidebarDrawer,
  MainSidebar,
  SidebarBtnContainer,
  LogoutBtn,
} from "./sidebar.styles";

const SidebarBtn = ({ url,children, ...props }) => {
  return (
    <SidebarBtnContainer {...props}>
      <Link to={url}>{children}</Link>
    </SidebarBtnContainer>
  );
};

const Sidebar = ({toggleScreenState}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const theme = useTheme();

  const [user, setUser] = useState({
    profilePic:
      "https://images.unsplash.com/photo-1521341957697-b93449760f30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc0fHx1c2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    username: "Sam_2910",
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
            <SidebarBtn  url="/feed" selected={true}>FEED</SidebarBtn>
            <SidebarBtn url="/explore" >EXPLORE</SidebarBtn>
            <SidebarBtn url="/activity" >ACTIVITY</SidebarBtn>
            <SidebarBtn url="/messages" >MESSAGES</SidebarBtn>
            <SidebarBtn url="/profile" >PROFILE</SidebarBtn>
            <SidebarBtn url="/settings" >SETTINGS</SidebarBtn>
          </div>

          <LogoutBtn>LOGOUT</LogoutBtn>
        </MainSidebar>
      </SidebarDrawer>
    </SidebarContainer>
  );
};

export default Sidebar;
