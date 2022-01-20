import { useCallback } from "react";

import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProjectsSuccess } from "../redux/slices/project.slice";

const useProjects = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { projects } = useSelector((state) => state.project);
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

  const postComment = useCallback(async (id, data) => {
    const response = await axios.post(`/project/${id}/rating`, data);
    console.log(response);
  }, []);

  const getExploreProjects = useCallback(async () => {
    const response = await axios.get("/project");
    console.log(response, "explore response");
    if (response.data) {
      dispatch(getProjectsSuccess(response.data));

      return response.data;
    }
  });

  return {
    createProject,
    getExploreProjects,
    getProject,
    postComment,
    projects,
  };
};

export default useProjects;
