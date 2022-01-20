import { useCallback } from "react";

import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";

const useProjects = () => {
  const navigate = useNavigate();

  const getExploreProjects = useCallback(async () => {}, []);

  const createProject = useCallback(async (data) => {
    const response = await axios.post("/project", data);
    console.log(response);
    navigate(`/project/${response.data}`);
  }, []);

  const getProject = useCallback(async (id) => {
    if (id !== null) {
      const response = await axios.get(`/project/${id}`);
      console.log(response);

      if (response) {
        return response.data;
      }
    }

    return null;
  }, []);

  return {
    createProject,
    getExploreProjects,
    getProject,
  };
};

export default useProjects;
