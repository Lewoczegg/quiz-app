import Footer from "../components/Footer";
import QuizScores from "../components/QuizScores";
import TopBar from "../components/TopBar";

const QuizHostory = () => {
  return (
    <div className="min-h-screen bg-neutral-lightgray flex flex-col">
      <TopBar />
      <div className="flex flex-1 justify-center items-center">
        <QuizScores />
      </div>
      <Footer />
    </div>
  );
};

export default QuizHostory;
