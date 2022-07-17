import { axios as Axios } from "lib/axios-dpl";
import { useMutation } from "react-query";

export const contactMe = async (payload: any) => {
  const { data } = await Axios.post(`/contacts/lucy`, payload);
  return data;
};

export const useContactMe = () =>
  useMutation<undefined, ApiError, any>((payload) => contactMe(payload));
