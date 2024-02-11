import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import useQuestions from "../hooks/useQuestions";
import { useState } from "react";
import QuizQuestion from "../components/QuizQuestion";
import useQuizStore from "../store/quizStore";
import QuizOption from "../components/QuizOption";

const QuizPage = () => {
  const questions = useQuestions();
  const {
    quiz: { selectedAnswers },
    setSelectedAnswer,
  } = useQuizStore();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleSubmitQuiz = () => {
    console.log("Quiz submitted:", selectedAnswers);
  };

  return (
    <div className="min-h-screen bg-neutral-lightgray flex flex-col">
      <TopBar />
      <div className="container mx-auto px-4 py-6 flex-1 lg:px-10 flex flex-col items-center">
        {currentQuestionIndex < questions.length && (
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
                  onChange={() =>
                    setSelectedAnswer(
                      questions[currentQuestionIndex].id,
                      answer.id
                    )
                  }
                />
              ))}
            </ul>
            <div className="flex mt-8 gap-4 justify-center">
              <button
                onClick={handlePreviousQuestion}
                className={`bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-secondary-blue focus:outline-none ${
                  currentQuestionIndex === 0
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={currentQuestionIndex === 0}
              >
                Previous Question
              </button>
              {currentQuestionIndex === questions.length - 1 ? (
                <button
                  onClick={handleSubmitQuiz}
                  className="bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-secondary-blue focus:outline-none"
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-secondary-blue focus:outline-none"
                >
                  Next Question
                </button>
              )}
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default QuizPage;
