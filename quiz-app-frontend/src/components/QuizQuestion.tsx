import CodeBlock, { CodeBlockProps } from "./CodeBlock";

interface Props {
  text: string;
}

type QuestionSection = string | CodeBlockProps;

const QuizQuestion = ({ text }: Props) => {
  const codeSections: QuestionSection[] = text
    .split("'''")
    .map((section, index) => {
      return index % 2 === 0 ? section : ({ code: section } as CodeBlockProps);
    });

  return (
    <div className="flex flex-col gap-2">
      {codeSections.map((section, index) =>
        typeof section === "string" ? (
          <span key={index}>{section}</span>
        ) : (
          <CodeBlock key={index} code={section.code} />
        )
      )}
    </div>
  );
};

export default QuizQuestion;
