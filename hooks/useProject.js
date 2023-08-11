import { useMutation, useQuery, useQueryClient } from "react-query";
import axiosInstance from "@/utils";
import { toast } from "react-toastify";

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

const updateProject = ({ id, project }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.put(`/api/project/${id}`, project, config);
};

const deleteProject = (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.delete(`/api/project/${id}`, config);
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

export const useUpdateProject = (onError) => {
  const queryClient = useQueryClient();
  return useMutation(updateProject, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("show-projects");
      toast.success(data?.data?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    },
    onError,
  });
};

export const useDeleteProject = (onError) => {
  const queryClient = useQueryClient();
  return useMutation(deleteProject, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("show-projects");
      toast.error(data?.data?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    },
    onError,
  });
};
