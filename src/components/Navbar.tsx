import { useNavigate } from "react-router-dom";
import Buttons from "./Skeleton/Buttons";
import ToggleDarkMode from "./Skeleton/ToggleDarkMode";
import { getBackgroundClass } from "../utils/getBackgroundClass";
import { useDisplayStore } from "../store/displayStore";
import { PATH_ENUM } from "../types/routeEnum";
import { hierarchicalPathOrder } from "../utils/getFullPath";
import {
  removeFromLocalStorage,
  setInLocalStorage,
} from "../utils/localStorage";
import { LOCAL_STORAGE } from "../types/localStorageEnum";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleDarkMode, isDarkMode] = useDisplayStore((state) => [
    state.setDarkMode,
    state.darkMode,
  ]);

  const handleDisplayMode = () => {
    toggleDarkMode(!isDarkMode);
  };

  const handleNextPath = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const index = hierarchicalPathOrder.indexOf(window.location.pathname);
    setInLocalStorage(LOCAL_STORAGE.PAGE, hierarchicalPathOrder[index + 1]);
    navigate(hierarchicalPathOrder[index + 1]);
  };
  const handlePreviousPath = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const index = hierarchicalPathOrder.indexOf(window.location.pathname);
    setInLocalStorage(LOCAL_STORAGE.PAGE, hierarchicalPathOrder[index - 1]);
    navigate(hierarchicalPathOrder[index - 1]);
  };

  return (
    <div
      className={`${getBackgroundClass(
        isDarkMode
      )} fixed flex justify-between w-full p-navbar font-ibm-plex-mono`}
    >
      <div className="flex">
        <button className="rounded-md border-2 border-solid border-gray-800 text-20 hover:pointer hover:text-white hover:bg-black">
          <p onClick={() => navigate("/")} className="p-2 font-semibold">
            {"console.log('Hello World')"}
          </p>
        </button>
        <div className="flex pl-10 pt-3 justify-around w-custom text-20">
          <Buttons to={PATH_ENUM.ABOUT} text="About" />
          <Buttons to={PATH_ENUM.PROJECTS} text="Project" />
        </div>
      </div>
      <div className="p-link">
        <div className="flex">
          <button onClick={handleNextPath}>Next</button>
          <button onClick={handlePreviousPath}>Previous</button>
          <button className="flex" onClick={handleDisplayMode}>
            <ToggleDarkMode isDarkMode={isDarkMode} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
