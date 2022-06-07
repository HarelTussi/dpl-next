import { axios as Axios } from "lib/axios";
import { useQuery } from "react-query";

export const fetchUser = async () => {
  const { data } = await Axios.post(`/users/me`);
  return data;
};

export const useUser = () =>
  useQuery<User, ApiError>("/users/me", fetchUser, {
    retry: false,
    staleTime: 60 * 60 * 1000,
    cacheTime: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    enabled: false,
  });
