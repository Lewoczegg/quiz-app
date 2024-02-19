import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useCookies } from "react-cookie";
import { isTokenExpired } from "./utils";
import DashboardPage from "./pages/DashboardPage";
import QuizPage from "./pages/QuizPage";
import QuizHostory from "./pages/QuizHostory";

function ProtectedRoute() {
  const [cookies] = useCookies(["jwt"]);

  const token = cookies.jwt;

  if (!token || isTokenExpired(token)) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
}

function App() {
  return (
    <div className="bg-neutral-lightgray">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/history" element={<QuizHostory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
