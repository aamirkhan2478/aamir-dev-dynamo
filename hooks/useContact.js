import { useMutation } from "react-query";
import axiosInstance from "@/utils";

const sendContact = (contact) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.post("/api/contact", contact, config);
};

export const useSendContact = (onSuccess, onError) => {
    return useMutation(sendContact, {
      onSuccess,
      onError,
    });
  };