import { Answer } from "../hooks/useQuestions";

interface Props {
  answer: Answer;
  isSelected: boolean;
  onChange: () => void;
  showCorrect: boolean;
}

const QuizOption = ({ answer, isSelected, onChange, showCorrect }: Props) => {
  return (
    <li
      className={`mb-4 ${
        answer.isCorrect && showCorrect ? "bg-green-200 rounded-lg" : ""
      }`}
    >
      <label
        className={`flex items-center ${!showCorrect ? "cursor-pointer" : ""}`}
      >
        <input
          type="radio"
          name="answer"
          checked={isSelected}
          onChange={onChange}
          className={`mr-2 appearance-none w-4 h-4 border border-primary-blue rounded-full checked:bg-primary-blue checked:border-transparent
           focus:outline-none shrink-0 ${
             !showCorrect ? "cursor-pointer disabled" : ""
           }`}
        />
        <span
          className={`text-lg ${
            answer.isCorrect && showCorrect ? "font-bold text-green-500" : ""
          }`}
        >
          {answer.text}
        </span>
      </label>
    </li>
  );
};

export default QuizOption;
