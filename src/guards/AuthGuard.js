import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import LoadingScreen from 'components/LoadingScreen';
// hooks
import useAuth from '../hooks/useAuth';



export default function AuthGuard({ children }) {
  const { isLoggedIn } = useAuth();
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if (isLoggedIn === null) return <div>loading ...</div>;

  if (isLoggedIn === false) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Navigate to="/sign-in" />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}
