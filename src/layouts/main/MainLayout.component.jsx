import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import Sidebar from "../../components/sidebar/sidebar.component";

import { Page, Content } from "./MainLayout.styles";

export const Context = React.createContext({})

const MainLayout = () => {
  const [isFullScreen,setIsFullScreen] = useState(true);

  React.useEffect(()=>{
    console.log(isFullScreen);
  },[isFullScreen]);
  

  return (
    <Page>
       <Context.Provider value={{ isFullScreen }}>
      <Sidebar toggleScreenState={()=>{setIsFullScreen(!isFullScreen)}}/>
      <Content fullScreen={isFullScreen}>
        <Outlet context={[isFullScreen]}/>
      </Content>
      </Context.Provider>
    </Page>
  );
};

export default MainLayout;
