import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const [cookies, , removeCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("jwt");
  };

  return (
    <header className="bg-primary-blue text-neutral-white p-4 flex justify-between items-center">
      <button onClick={() => navigate("/dashboard")}>
        <span>IT Quiz Dashboard</span>
      </button>
      <button
        onClick={handleLogout}
        className="bg-accent-red hover:bg-red-700 text-neutral-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </header>
  );
};

export default TopBar;
