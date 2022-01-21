import { useCallback } from "react";

import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";

const useUsers = () => {
  const getUser = useCallback(async (id) => {
    const response = await axios.get(`/user/${id}`);
    console.log(response, "user response");
    if (response.data) {
      delete response.data.password;
      return response.data;
    }
  });


  const followUser = useCallback(async (id)=>{
    const response = await axios.get(`/user/follow/${id}`);
    console.log(response,"this is follow response");
  },[])


  const getUserFeed = useCallback(async ()=>{
    const response = await axios.get('/user/feed');
    console.log(response,"feed response");

    return response.data || [];
  })

  const updateUserInfo = useCallback(async (userId,data)=>{
    const res = await axios.put(`/user/${userId}`,data);
    console.log(res);
  })

  return {
    getUser,
    followUser,
    getUserFeed,
    updateUserInfo
  };
};

export default useUsers;
