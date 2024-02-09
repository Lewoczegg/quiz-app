import { apiRequest } from "./api-client";

export const getTopics = async (token: string) => {
  return await apiRequest({
    url: "/topic/",
    token: token,
    data: {},
    method: "GET",
  });
};
