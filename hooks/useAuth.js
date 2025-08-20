import { useMutation } from "react-query";
import axiosInstance from "@/utils";

const login = (credentials) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.post("/api/auth", credentials, config);
};

export const useLogin = (onSuccess, onError) => {
  return useMutation(login, {
    onSuccess,
    onError,
  });
};
