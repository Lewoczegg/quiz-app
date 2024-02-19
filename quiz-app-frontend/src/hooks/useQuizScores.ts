import { useCookies } from "react-cookie";
import { axiosInstance } from "../services/api-client";
import { useQuery } from "react-query";

export interface QuizScore {
  userName: string;
  topicName: string;
  score: number;
}

export const useQuizScores = () => {
  const [cookies] = useCookies();
  const token = cookies.jwt;
  const userName = cookies.user;

  const getQuiz = (): Promise<QuizScore[]> =>
    axiosInstance
      .get(`/quiz/score/${userName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);

  return useQuery({
    queryKey: "scores",
    queryFn: getQuiz,
  });
};
