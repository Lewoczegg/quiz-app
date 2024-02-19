import { Table } from "flowbite-react";
import { useQuizScores } from "../hooks/useQuizScores";

const QuizScores = () => {
  const { data: scores, isLoading } = useQuizScores();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Table>
      <Table.Head>
        <Table.HeadCell className="text-base">Topic</Table.HeadCell>
        <Table.HeadCell className="text-base">Score</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {scores?.map((score) => (
          <>
            <Table.Row
              className={`${
                score.score > 80
                  ? "bg-green-400"
                  : score.score > 50
                  ? "bg-yellow-300"
                  : "bg-red-500"
              }`}
            >
              <Table.Cell className="text-black font-bold px-10">
                {score.topicName}
              </Table.Cell>
              <Table.Cell className="text-black font-bold px-10">
                {score.score}
              </Table.Cell>
            </Table.Row>
          </>
        ))}
      </Table.Body>
    </Table>
  );
};

export default QuizScores;
