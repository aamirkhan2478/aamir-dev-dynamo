import { useMutation, useQuery, useQueryClient } from "react-query";
import axiosInstance from "@/utils";
import { toast } from "react-toastify";

const skills = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.get("/api/skill", config);
};

const skill = ({ queryKey }) => {
  const id = queryKey[1];
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.get(`/api/skill/${id}`, config);
};

const addSkill = (skill) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.post("/api/skill", skill, config);
};

const updateSkill = ({ id, skill }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.put(`/api/skill/${id}`, skill, config);
};

const deleteSkill = (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.delete(`/api/skill/${id}`, config);
};

export const useShowSkills = () => {
  return useQuery("show-skills", skills, {
    staleTime: 60000,
    select: (data) => {
      const skills = data?.data?.skills;
      return skills;
    },
  });
};

export const useShowSkill = (id) => {
  return useQuery(["show-skill", id], skill, {
    staleTime: 60000,
    select: (data) => {
      const skill = data?.data?.skill;
      return skill;
    },
  });
};

export const useAddSkill = (onSuccess, onError) => {
  return useMutation(addSkill, {
    onSuccess,
    onError,
  });
};

export const useUpdateSkill = (onError) => {
  const queryClient = useQueryClient();
  return useMutation(updateSkill, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("show-skills");
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

export const useDeleteSkill = (onError) => {
  const queryClient = useQueryClient();
  return useMutation(deleteSkill, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("show-skills");
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
