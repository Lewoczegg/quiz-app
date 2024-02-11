interface Props {
  answer: {
    id: string;
    text: string;
  };
  isSelected: boolean;
  onChange: () => void;
}

const QuizOption = ({ answer, isSelected, onChange }: Props) => {
  return (
    <li className="mb-4">
      <label className="flex items-center">
        <input
          type="radio"
          name="answer"
          checked={isSelected}
          onChange={onChange}
          className="mr-2 appearance-none w-4 h-4 border border-primary-blue rounded-full checked:bg-primary-blue checked:border-transparent focus:outline-none shrink-0"
        />
        <span className="text-lg">{answer.text}</span>
      </label>
    </li>
  );
};

export default QuizOption;
