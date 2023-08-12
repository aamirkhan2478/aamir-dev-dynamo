import { useMutation, useQuery, useQueryClient } from "react-query";
import axiosInstance from "@/utils";
import { toast } from "react-toastify";

const frameworks = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.get("/api/framework", config);
};

const framework = ({ queryKey }) => {
  const id = queryKey[1];
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.get(`/api/framework/${id}`, config);
};

const addFramework = (framework) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.post("/api/framework", framework, config);
};

const updateFramework = ({ id, framework }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.put(`/api/framework/${id}`, framework, config);
};

const deleteFramework = (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.delete(`/api/framework/${id}`, config);
};

export const useShowFrameworks = () => {
  return useQuery("show-frameworks", frameworks, {
    staleTime: 60000,
    select: (data) => {
      const frameworks = data?.data?.frameworks;
      return frameworks;
    },
  });
};

export const useShowFramework = (id) => {
  return useQuery(["show-framework", id], framework, {
    staleTime: 60000,
    select: (data) => {
      const framework = data?.data?.framework;
      return framework;
    },
  });
};

export const useAddFramework = (onSuccess, onError) => {
  return useMutation(addFramework, {
    onSuccess,
    onError,
  });
};

export const useUpdateFramework = (onError) => {
  const queryClient = useQueryClient();
  return useMutation(updateFramework, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("show-frameworks");
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

export const useDeleteFramework = (onError) => {
  const queryClient = useQueryClient();
  return useMutation(deleteFramework, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("show-frameworks");
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
