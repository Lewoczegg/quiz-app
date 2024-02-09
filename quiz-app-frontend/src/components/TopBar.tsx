import { useCookies } from "react-cookie";

const TopBar = () => {
  const [cookies, , removeCookie] = useCookies(["jwt"]);

  const handleLogout = () => {
    removeCookie("jwt");
  };

  return (
    <header className="bg-primary-blue text-neutral-white p-4 flex justify-between items-center">
      <span>IT Quiz Dashboard</span>
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
