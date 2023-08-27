import { useMutation, useQuery } from "react-query";
import axiosInstance from "@/utils";

const sendContact = (contact) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.post("/api/contact", contact, config);
};

const contacts = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axiosInstance.get("/api/contact", config);
};

export const useSendContact = (onSuccess, onError) => {
    return useMutation(sendContact, {
      onSuccess,
      onError,
    });
  };

  export const useShowContacts = () => {
    return useQuery("show-contacts", contacts, {
      staleTime: 60000,
      select: (data) => {
        const contacts = data?.data?.contacts;
        return contacts;
      },
    });
  };