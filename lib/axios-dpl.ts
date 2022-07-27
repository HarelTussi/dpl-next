import Axios from "axios";
import { INSIGHTS_SERVER_URL } from "config/index";

export const axios = Axios.create({
  baseURL: INSIGHTS_SERVER_URL,
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: any) => {
    const message = error.response?.data?.message || error.response?.data;
    error.message = message;
    return Promise.reject(error);
  }
);
