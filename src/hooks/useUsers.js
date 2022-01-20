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

  return {
    getUser,
  };
};

export default useUsers;
