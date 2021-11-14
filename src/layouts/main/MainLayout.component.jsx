import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import Sidebar from "../../components/sidebar/sidebar.component";

import { Page, Content } from "./MainLayout.styles";

const MainLayout = () => {
  const [isFullScreen,setIsFullScreen] = useState(true);

  React.useEffect(()=>{
    console.log(isFullScreen);
  },[isFullScreen])

  return (
    <Page>
      <Sidebar toggleScreenState={()=>{setIsFullScreen(!isFullScreen)}}/>
      <Content fullScreen={isFullScreen}>
        <Outlet />
      </Content>
    </Page>
  );
};

export default MainLayout;
