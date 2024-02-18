import { apiRequest } from "./api-client";

interface QuizScore {
  userName: string;
  topicName: string;
  score: number;
}

export const submitQuiz = async (quizScore: QuizScore, token: string) => {
  apiRequest({
    url: "quiz/score",
    method: "POST",
    data: quizScore,
    token: token,
  });
};
