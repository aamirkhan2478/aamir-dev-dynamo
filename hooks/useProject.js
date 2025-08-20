import { useMutation, useQuery, useQueryClient } from "react-query";
import axiosInstance from "@/utils";
import { toast } from "react-toastify";

const projects = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await axiosInstance.get("/api/project", config);
};

const project = async ({ queryKey }) => {
  const id = queryKey[1];
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axiosInstance.get(`/api/project/${id}`, config);
  return response.data;
};

const addProject = async (project) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await axiosInstance.post("/api/project", project, config);
};

const updateProject = async ({ id, project }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await axiosInstance.put(`/api/project/${id}`, project, config);
};

const deleteProject = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await axiosInstance.delete(`/api/project/${id}`, config);
};

export const useShowProjects = () => {
  return useQuery("show-projects", projects, {
    staleTime: 60000,
  });
};

export const useShowProject = (id) => {
  return useQuery(["show-project", id], project, {
    staleTime: 60000,
    enabled: false, // we will trigger manually
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
