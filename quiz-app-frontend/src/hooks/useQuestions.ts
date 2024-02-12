import { useCookies } from "react-cookie";
import { useQuery } from "react-query";
import useQuizStore from "../store/quizStore";
import { axiosInstance } from "../services/api-client";

export interface Question {
  id: string;
  text: string;
  answers: Answer[];
}

export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

const useQuestions = () => {
  const { quiz } = useQuizStore();
  const [cookies] = useCookies(["jwt"]);
  const token = cookies.jwt;

  const getQuiz = (): Promise<Question[]> =>
    axiosInstance
      .get(`/quiz/${quiz.topicName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);

  return useQuery({
    queryKey: "questions",
    queryFn: getQuiz,
  });
};

export default useQuestions;
