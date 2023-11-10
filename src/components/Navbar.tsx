import { useDisplayStore } from "../store/displayStore";
import { useNavigate } from "react-router-dom";
import Buttons from "./Skeleton/Buttons";
import ToggleDarkMode from "./Skeleton/ToggleDarkMode";
import { getBackgroundClass } from "../utils/getBackgroundClass";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleDarkMode, isDarkMode] = useDisplayStore((state) => [
    state.setDarkMode,
    state.lightMode,
  ]);

  const handleDisplayMode = () => {
    toggleDarkMode();
  };

  return (
    <div
      className={`fixed ${getBackgroundClass(
        isDarkMode
      )} flex justify-between w-full p-navbar font-ibm-plex-mono`}
    >
      <div className="flex">
        <button className="rounded-md border-2 border-solid border-gray-800 text-20 hover:pointer hover:text-white hover:bg-black">
          <p onClick={() => navigate("/")} className="p-2 font-semibold">
            {"console.log('Hello World')"}
          </p>
        </button>
        <div className="flex pl-10 pt-3 justify-around w-custom text-20">
          <Buttons to="about" text="About" />
          <Buttons to="knowledge" text="Knowledge" />
        </div>
      </div>
      <div className="p-link">
        <div className="flex">
          <button className="flex" onClick={handleDisplayMode}>
            <ToggleDarkMode isDarkMode={isDarkMode} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
