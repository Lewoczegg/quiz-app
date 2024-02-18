import { JwtPayload, jwtDecode } from "jwt-decode";
import { Question } from "../hooks/useQuestions";

export const isTokenExpired = (token: string): boolean => {
  const decodedToken = jwtDecode<JwtPayload>(token);
  const currentTime = Date.now() / 1000;
  return decodedToken.exp ? decodedToken.exp < currentTime : false;
};

export const calculateScore = (
  questions: Question[],
  selectedAnswers: Map<string, string>
) => {
  let score = 0;
  questions?.forEach((question) => {
    const selectedAnswer = selectedAnswers.get(question.id);
    if (
      selectedAnswer &&
      question.answers.find((answer) => answer.id === selectedAnswer)?.isCorrect
    ) {
      score += 1;
    }
  });
  if (!questions) return 0;

  return (score / questions.length) * 100;
};
