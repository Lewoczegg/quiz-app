import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import useQuestions from "../hooks/useQuestions";
import { useState } from "react";
import QuizQuestion from "../components/QuizQuestion";
import useQuizStore from "../store/quizStore";

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
                <li key={answer.id} className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="answer"
                      checked={
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
                      className="mr-2 appearance-none w-4 h-4 border border-primary-blue rounded-full checked:bg-primary-blue checked:border-transparent focus:outline-none shrink-0"
                    />
                    <span className="text-lg">{answer.text}</span>
                  </label>
                </li>
              ))}
            </ul>
            <div className="flex mt-8 gap-4 justify-center">
              <button
                onClick={handlePreviousQuestion}
                className="bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-secondary-blue focus:outline-none"
              >
                Previous Question
              </button>
              <button
                onClick={handleNextQuestion}
                className="bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-secondary-blue focus:outline-none"
              >
                Next Question
              </button>
            </div>
          </div>
        )}
        {currentQuestionIndex === questions.length && (
          <div className="mt-8 text-xl font-bold">
            <h2>Quiz Completed!</h2>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default QuizPage;
