import axios from "axios";

interface ApiRequestProps {
  url: string;
  token: string;
  data?: any;
  method?: "GET" | "POST" | "PUT" | "DELETE";
}

const API_URL = "http://localhost:8080/api";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  responseType: "json",
});

export const apiRequest = async ({
  url,
  token,
  data,
  method,
}: ApiRequestProps) => {
  try {
    const result = await axiosInstance(url, {
      method: method || "GET",
      data: data,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return result;
  } catch (error) {
    throw error;
  }
};
