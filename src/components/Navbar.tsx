import { useNavigate } from "react-router-dom";
import Buttons from "./Skeleton/Buttons";
import ToggleDarkMode from "./Skeleton/ToggleDarkMode";
import { getBackgroundClass } from "../utils/getBackgroundClass";
import { useDisplayStore } from "../store/displayStore";
import { PATH_ENUM } from "../types/routeEnum";
import { projectPaths, parentPaths } from "../utils/getFullPath";
import { useRouteStore } from "../store/routeStore";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleDarkMode, isDarkMode] = useDisplayStore((state) => [
    state.setDarkMode,
    state.lightMode,
  ]);

  const setRoute = useRouteStore((state) => state.setRouteState);

  const handleDisplayMode = () => {
    toggleDarkMode();
  };

  const handleNextPath = (e: any) => {
    e.preventDefault();
    const index = parentPaths.indexOf(window.location.pathname.substring(1));
    if (index === 2) {
      const childPaths = `${parentPaths[2]}/${projectPaths[0]}`;
      const childIndex = projectPaths.indexOf(childPaths.split("/")[1]);
      //navigate(`${parentPaths[2]}/${projectPaths[childIndex]}`);
      navigate(childPaths);
    } else {
      navigate(parentPaths[index + 1]);
    }
  };

  const handlePreviousPath = (e: any) => {
    e.preventDefault();
    const index = parentPaths.indexOf(window.location.pathname.substring(1));
    navigate(parentPaths[index - 1]);
  };
  console.log(window.location.pathname);
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
