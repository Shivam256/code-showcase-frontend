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
    }
  ]);
}

const Sidebar = Loadable(
  lazy(() => import("../components/sidebar/sidebar.component"))
);

const SignIn = Loadable(
    lazy(()=>import('../pages/sign-in/sign-in.component'))
)