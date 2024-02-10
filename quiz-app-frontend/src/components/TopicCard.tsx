import { useNavigate } from "react-router-dom";
import { Topic } from "../hooks/useTopics";
import useQuizStore from "../store/quizStore";

interface Props {
  topic: Topic;
}

const TopicCard = ({ topic }: Props) => {
  const { setQuizTopic } = useQuizStore();
  const navigate = useNavigate();

  const handleClick = async () => {
    setQuizTopic(topic.name);
    navigate("/quiz");
  };

  return (
    <div className="bg-neutral-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col justify-center items-center">
      <img
        src={topic.imageUrl}
        alt={topic.name}
        className="flex-1 object-fit"
      />
      <h3 className="text-xl font-semibold mb-2">{topic.name}</h3>
      <button
        className="mt-4 bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-secondary-teal focus:outline-none"
        onClick={handleClick}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default TopicCard;
