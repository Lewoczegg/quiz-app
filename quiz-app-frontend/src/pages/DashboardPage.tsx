import Footer from "../components/Footer";
import TopBar from "../components/TopBar";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-neutral-lightgray flex flex-col">
      <TopBar />

      <div className="container mx-auto px-4 py-6 flex-1">
        <h2 className="text-xl font-bold mb-4 text-neutral-darkgray">
          Quiz Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-neutral-white p-4 rounded shadow">Java</div>
          <div className="bg-neutral-white p-4 rounded shadow">Spring</div>
          <div className="bg-neutral-white p-4 rounded shadow">JavaScript</div>
          {/* More categories */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardPage;
