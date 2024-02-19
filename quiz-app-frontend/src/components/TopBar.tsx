import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { Dropdown } from "flowbite-react";

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

      <div className="flex gap-3 items-center">
        <button
          onClick={handleLogout}
          className="bg-accent-red hover:bg-red-700 text-neutral-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>

        <Dropdown
          label=""
          renderTrigger={() => (
            <UserCircleIcon className="h-10 w-10 cursor-pointer" />
          )}
        >
          <Dropdown.Item onClick={() => navigate("/history")}>
            <span className="text-base font-medium">History</span>
          </Dropdown.Item>
        </Dropdown>
      </div>
    </header>
  );
};

export default TopBar;
