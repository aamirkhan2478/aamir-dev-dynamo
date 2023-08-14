import { useMutation, useQuery, useQueryClient } from "react-query";
import axiosInstance from "@/utils";
import { toast } from "react-toastify";

const languages = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.get("/api/language", config);
};

const language = ({ queryKey }) => {
  const id = queryKey[1];
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.get(`/api/language/${id}`, config);
};

const addLanguage = (language) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.post("/api/language", language, config);
};

const updateLanguage = ({ id, language }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.put(`/api/language/${id}`, language, config);
};

const deleteLanguage = (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.delete(`/api/language/${id}`, config);
};

export const useShowLanguages = () => {
  return useQuery("show-languages", languages, {
    staleTime: 60000,
    select: (data) => {
      const languages = data?.data?.languages;
      return languages;
    },
  });
};

export const useShowLanguage = (id) => {
  return useQuery(["show-language", id], language, {
    staleTime: 60000,
    select: (data) => {
      const language = data?.data?.language;
      return language;
    },
  });
};

export const useAddLanguage = (onSuccess, onError) => {
  return useMutation(addLanguage, {
    onSuccess,
    onError,
  });
};

export const useUpdateLanguage = (onError) => {
  const queryClient = useQueryClient();
  return useMutation(updateLanguage, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("show-languages");
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

export const useDeleteLanguage = (onError) => {
  const queryClient = useQueryClient();
  return useMutation(deleteLanguage, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("show-languages");
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
