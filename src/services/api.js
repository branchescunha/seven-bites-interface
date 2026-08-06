import axios from "axios";

import { getHttpErrorMessage } from "./httpErrors";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem("seven-bites:userData");
  const token = userData ? JSON.parse(userData).token : null;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    error.publicMessage = getHttpErrorMessage(error);

    if (error.response?.status === 401) {
      localStorage.removeItem("seven-bites:userData");

      if (!window.location.pathname.includes("/login")) {
        window.location.replace("/login");
      }
    }

    return Promise.reject(error);
  },
);
