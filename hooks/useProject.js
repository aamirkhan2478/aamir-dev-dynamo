import { useMutation, useQuery } from "react-query";
import axiosInstance from "@/utils";

const projects = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.get("/api/project", config);
};

const project = ({ queryKey }) => {
  const id = queryKey[1];
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.get(`/api/project/${id}`, config);
};

const addProject = (project) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.post("/api/project", project, config);
};

export const useShowProjects = () => {
  return useQuery("show-projects", projects, {
    staleTime: 60000,
  });
};

export const useShowProject = (id) => {
  return useQuery(["show-project", id], project, {
    staleTime: 60000,
  });
};

export const useAddProject = (onSuccess, onError) => {
  return useMutation(addProject, {
    onSuccess,
    onError,
  });
};
