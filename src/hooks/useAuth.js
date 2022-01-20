import { useCallback } from "react";

//libs
import { useSelector, useDispatch } from "react-redux";

//redux
import { loginSuccess,initialize,logoutSuccess } from "../redux/slices/auth";

import { setSession, isValidToken } from "../utils/jwt";

import axios from "../utils/axios";

const useAuth = () => {
  const { isLoggedIn, token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const register = useCallback(async (userData) => {
    const response = await axios.post("/auth/signup", userData);
    console.log(response, "i am signup response");
  },[]);

  const login = useCallback(async (userData) => {
    const response = await axios.post("/auth/login", userData);
    console.log(response, "i am login response");

    if (response.data) {
      const { user, token } = response.data;
      setSession(token);
      dispatch(loginSuccess({ user }));
    }
  },[]);

  const logout = useCallback(async()=>{
      setSession(null);
      dispatch(logoutSuccess());
  },[])

  const initializeAuth = useCallback(async () => {
    const accessToken = window.localStorage.getItem("accessToken");

    if (isValidToken(accessToken)) {
      setSession(accessToken);
      const response = await axios.get("/auth/jwtVerify");
      if (response) {
        const { user } = response.data;
        delete user.password;
        dispatch(
          initialize({
            user,
            isLoggedIn: true,
          })
        );
      } else {
        dispatch(
          initialize({
            user: null,
            isLoggedIn: false,
          })
        );
      }
    } else {
      dispatch(
        initialize({
          user: null,
          isLoggedIn: false,
        })
      );
    }
  }, []);

  return {
    register,
    login,
    logout,
    initializeAuth,
    isLoggedIn
  };
};

export default useAuth;
