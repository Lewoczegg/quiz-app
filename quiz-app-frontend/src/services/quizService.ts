import { apiRequest } from "./api-client";

export const getTopics = async (token: string) => {
  return await apiRequest({
    url: "/topic/",
    token: token,
    data: {},
    method: "GET",
  });
};

export const getQuiz = async (token: string, topicName: string) => {
  return await apiRequest({
    url: `/quiz/${topicName}`,
    token: token,
    data: {},
    method: "GET",
  });
};
