import { axios as Axios } from "lib/axios";
import { useMutation } from "react-query";

export const joinNewsletter = async (email: string) => {
  const { data } = await Axios.post(`/subscribe`, {
    email,
  });
  return data;
};

export const useJoinNewsletter = () =>
  useMutation<undefined, ApiError, string>((email) => joinNewsletter(email));
