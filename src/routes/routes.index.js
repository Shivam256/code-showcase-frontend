import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { CircularProgress } from "@mui/material";

const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <CircularProgress
          sx={{
            ...{
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: "fixed",
            },
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/sidebar",
      element: <Sidebar />,
    },
    {
        path:'/sign-in',
        element:<SignIn/>
    },
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
          path:'/feed',
          element:<Feed/>
        }
      ]
    },
   
  ]);
}

const Sidebar = Loadable(
  lazy(() => import("../components/sidebar/sidebar.component"))
);


//layouts
const MainLayout = Loadable(
  lazy(()=>import("../layouts/main/MainLayout.component"))
)


//pages
const SignIn = Loadable(
    lazy(()=>import('../pages/sign-in/sign-in.component'))
)
const Feed = Loadable(
  lazy(()=> import("../pages/feed/feed.component"))
)

