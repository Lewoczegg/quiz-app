import { useState } from "react";
import Footer from "../components/Footer";
import QuizOption from "../components/QuizOption";
import QuizQuestion from "../components/QuizQuestion";
import QuizResultsModal from "../components/QuizResultsModal";
import TopBar from "../components/TopBar";
import useQuestions from "../hooks/useQuestions";
import useQuizStore from "../store/quizStore";
import { useQueryClient } from "react-query";

const QuizPage = () => {
  const { data: questions, isLoading } = useQuestions();

  const queryClient = useQueryClient();

  const {
    quiz: { selectedAnswers },
    setSelectedAnswer,
    setQuizRestarted,
  } = useQuizStore();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const playAgain = () => {
    queryClient.refetchQueries("questions").then(() => {
      setQuizRestarted();
      setCurrentQuestionIndex(0);
      setShowResults(false);
    });
  };

  const calculateScore = () => {
    let score = 0;
    questions?.forEach((question) => {
      const selectedAnswer = selectedAnswers.get(question.id);
      if (
        selectedAnswer &&
        question.answers.find((answer) => answer.id === selectedAnswer)
          ?.isCorrect
      ) {
        score += 1;
      }
    });
    if (!questions) return "0";

    return ((score / questions.length) * 100).toFixed(2);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-neutral-lightgray flex flex-col">
      <TopBar />
      <div className="container mx-auto px-4 py-6 flex-1 lg:px-10 flex flex-col items-center justify-center">
        {showResults ? (
          <QuizResultsModal score={calculateScore()} onPlayAgain={playAgain} />
        ) : (
          <>
            {questions && (
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
                        selectedAnswers.get(
                          questions[currentQuestionIndex].id
                        ) === answer.id
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
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default QuizPage;
