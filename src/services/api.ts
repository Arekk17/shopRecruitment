import axios from "axios";
import type { AxiosInstance } from "axios";

const baseURL = import.meta.env.VITE_API_URL || "https://dummyjson.com";

export const apiClient: AxiosInstance = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
