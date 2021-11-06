import React, { useState } from "react";

//components
import IconButton from "../icon-button/icon-button.component";

//libs
import { Icon } from "@iconify/react";
import { Avatar, useTheme } from "@mui/material";

//styled
import { SidebarContainer, SidebarDrawer, MainSidebar } from "./sidebar.styles";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const theme = useTheme();

  const [user,setUser] = useState({
    profilePic:'https://images.unsplash.com/photo-1521341957697-b93449760f30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc0fHx1c2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    username:'Sam_2910',
  })

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
      <SidebarDrawer open={isSidebarOpen} anchor="left" onOpen={openSidebar}>
        <MainSidebar>
          <Icon
            icon="eva:close-circle-outline"
            className="close-icon"
            onClick={closeSidebar}
          />
          <Avatar src={user.profilePic}  />
        </MainSidebar>
      </SidebarDrawer>
    </SidebarContainer>
  );
};

export default Sidebar;
