import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import TopicCard from "../components/TopicCard";
import useTopics from "../hooks/useTopics";
import { useCookies } from "react-cookie";

const DashboardPage = () => {
  const topics = useTopics();
  const [cookie] = useCookies();

  return (
    <div className="min-h-screen bg-neutral-lightgray flex flex-col">
      <TopBar />

      <div className="container mx-auto px-4 py-6 flex-1 lg:px-10">
        <p>Hello {cookie.user}</p>
        <h2 className="text-xl font-bold mb-4 text-neutral-darkgray">
          Quiz Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardPage;
