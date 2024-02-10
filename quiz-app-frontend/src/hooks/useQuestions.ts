import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getQuiz } from "../services/quizService";
import useQuizStore from "../store/quizStore";

interface Question {
  id: string;
  text: string;
  answers: Answer[];
}

interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

const useQuestions = () => {
  const { quiz } = useQuizStore();
  const [topics, setTopics] = useState<Question[]>([]);
  const [cookies] = useCookies(["jwt"]);
  const token = cookies.jwt;

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await getQuiz(token, quiz.topicName);
        setTopics(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchTopics();
  }, [token]);

  return topics;
};

export default useQuestions;