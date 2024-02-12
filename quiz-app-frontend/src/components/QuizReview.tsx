import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Question } from "../hooks/useQuestions";
import useQuizStore from "../store/quizStore";
import QuizOption from "./QuizOption";
import QuizQuestion from "./QuizQuestion";

interface Props {
  questions: Question[];
  score: string;
}

const QuizReview = ({ questions, score }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const {
    quiz: { selectedAnswers },
  } = useQuizStore();

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const navigate = useNavigate();

  return (
    <div className="bg-white p-8 rounded-md shadow-lg w-full lg:w-2/3">
      <h2 className="text-2xl font-bold mb-6">
        <QuizQuestion text={questions[currentQuestionIndex].text} />
      </h2>
      <ul>
        {questions[currentQuestionIndex].answers.map((answer) => (
          <QuizOption
            key={answer.id}
            answer={answer}
            isSelected={
              selectedAnswers.get(questions[currentQuestionIndex].id) ===
              answer.id
            }
            onChange={() => {}}
            showCorrect={true}
          />
        ))}
      </ul>
      <div className="flex mt-8 gap-4 justify-center">
        <button
          onClick={handlePreviousQuestion}
          className={`flex-1 bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-secondary-blue focus:outline-none ${
            currentQuestionIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentQuestionIndex === 0}
        >
          Previous Question
        </button>

        <button
          onClick={handleNextQuestion}
          className={`flex-1 bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-secondary-blue focus:outline-none ${
            currentQuestionIndex === questions.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Next Question
        </button>
        <button
          className="flex-1 bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-secondary-blue focus:outline-none"
          onClick={() => navigate("/dashboard")}
        >
          Exit
        </button>
      </div>
      <p>Your score: {score}%</p>

      <p className="mt-4 text-sm text-gray-500">
        Question {currentQuestionIndex + 1} of {questions.length}
      </p>
    </div>
  );
};

export default QuizReview;
