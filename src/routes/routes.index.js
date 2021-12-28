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
        },
        {
          path:'/explore',
          element:<Explore/>
        },
        {
          path:'/activity',
          element:<Activity/>
        },
        {
          path:'/messages',
          element:<Messages/>
        },
        {
          path:'/profile',
          element:<Profile/>
        },
        {
          path:'/settings',
          element:<Settings/>
        },
        {
          path:'/project/:id',
          element:<Project/>
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
const Explore = Loadable(
  lazy(()=>import("../pages/explore/explore.component"))
)
const Activity = Loadable(
  lazy(()=>import("../pages/activity/activity.component"))
)
const Messages = Loadable(
  lazy(()=>import("../pages/messages/messages.component"))
)
const Profile = Loadable(
  lazy(()=>import("../pages/profile/profile.component"))
)
const Settings = Loadable(
  lazy(()=>import('../pages/settings/settings.component'))
)
const Project = Loadable(
  lazy(()=>import("../pages/project/project.component"))
)