import { QuizScore } from "../hooks/useQuizScores";
import { apiRequest } from "./api-client";

export const submitQuiz = async (quizScore: QuizScore, token: string) => {
  apiRequest({
    url: "quiz/score",
    method: "POST",
    data: quizScore,
    token: token,
  });
};
