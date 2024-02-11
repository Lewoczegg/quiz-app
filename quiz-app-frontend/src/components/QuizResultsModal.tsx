import { useNavigate } from "react-router-dom";

interface Props {
  score: string;
  onPlayAgain: () => void;
}

const QuizResultsModal = ({ score, onPlayAgain }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-lg w-full mx-10">
        <h2 className="text-2xl font-bold mb-6">Quiz Results</h2>
        <p>Your score: {score}%</p>
        <div className="flex mt-8 gap-4 justify-center flex-col md:flex-row">
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
            className="flex-1 bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-secondary-teal focus:outline-none"
          >
            Back to Dashboard
          </button>
          <button
            onClick={() => onPlayAgain()}
            className="flex-1 bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-secondary-teal focus:outline-none"
          >
            Play Again
          </button>
          <button
            onClick={() => {}}
            className="flex-1 bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-secondary-teal focus:outline-none"
          >
            Show Correct Answers
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResultsModal;
