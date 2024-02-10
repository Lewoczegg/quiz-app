import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import useQuestions from "../hooks/useQuestions";
import { useState } from "react";

const QuizPage = () => {
  const questions = useQuestions();

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
      <div className="container mx-auto px-4 py-6 flex-1 lg:px-10 flex flex-col">
        {currentQuestionIndex < questions.length && (
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-4">
              {questions[currentQuestionIndex].text}
            </h2>
            <ul>
              {questions[currentQuestionIndex].answers.map((answer) => (
                <li key={answer.id} className="mb-2">
                  <label>
                    <input type="radio" name="answer" />
                    {answer.text}
                  </label>
                </li>
              ))}
            </ul>
            <div className="flex mt-4 gap-4 justify-center">
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
          <div>
            <h2>Quiz Completed!</h2>
            {/* Add any additional completion message or summary here */}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default QuizPage;
