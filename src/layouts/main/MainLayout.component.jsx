import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import Sidebar from "../../components/sidebar/sidebar.component";

import { Page, Content } from "./MainLayout.styles";

import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

export const Context = React.createContext({});

const MainLayout = () => {
  const [isFullScreen, setIsFullScreen] = useState(true);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  React.useEffect(() => {
    console.log(isFullScreen);
  }, [isFullScreen]);

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate("/sign-in");
    } else {
      if (pathname === "/") {
        navigate("/feed");
      } else {
        navigate(pathname);
      }
    }
  }, [isLoggedIn]);

  return (
    <Page>
      <Context.Provider value={{ isFullScreen }}>
        <Sidebar
          toggleScreenState={() => {
            setIsFullScreen(!isFullScreen);
          }}
        />
        <Content fullScreen={isFullScreen}>
          <Outlet context={[isFullScreen]} />
        </Content>
      </Context.Provider>
    </Page>
  );
};

export default MainLayout;
