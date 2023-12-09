import { useNavigate } from "react-router-dom";
import { Button, ToggleDarkMode } from "./Skeleton";
import { getBackgroundClass } from "../utils/getBackgroundClass";
import { useDisplayStore } from "../store/displayStore";
import { PATH_ENUM } from "../types/routeEnum";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleDarkMode, isDarkMode] = useDisplayStore((state) => [
    state.setDarkMode,
    state.darkMode,
  ]);

  const handleDisplayMode = () => {
    toggleDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`${getBackgroundClass(
        isDarkMode
      )} z-10 fixed flex justify-between w-full p-navbar font-ibm-plex-mono`}
    >
      <div className="flex">
        <button className="solid-button text-20 hover:pointer hover:text-white hover:bg-black">
          <p onClick={() => navigate("/")} className="p-2 font-semibold">
            {"console.log('Hello World')"}
          </p>
        </button>
        <div className="flex pl-10 pt-3 justify-around w-custom text-20">
          <Button onClick={() => navigate(PATH_ENUM.ABOUT)} text="About" />
          <Button onClick={() => navigate(PATH_ENUM.PROJECTS)} text="Project" />
        </div>
      </div>

      <div className="flex w-custom justify-around pt-3 align-middle">
        <div onClick={handleDisplayMode}>
          <ToggleDarkMode isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
