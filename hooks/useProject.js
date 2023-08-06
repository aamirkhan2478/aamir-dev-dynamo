import { useQuery } from "react-query";
import axiosInstance from "@/utils";

const projects = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.get("/api/project", config);
};

export const useShowProjects = () => {
  return useQuery("show-projects", projects, {
    staleTime: 60000,
  });
};
