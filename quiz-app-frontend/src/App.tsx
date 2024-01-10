import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <div className="bg-neutral-lightgray">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </div>
  );
}

export default App;
