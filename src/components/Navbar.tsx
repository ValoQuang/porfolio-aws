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
      <div className="flex items-center pt-3 justify-start gap-20 text-20 w-7/12">
        <div className="border-2 flex justify-center items-center w-32 h-10 rounded-xl">
          <Button onClick={() => navigate("/")} text={PATH_ENUM.MAIN} />
        </div>
        <Button
          onClick={() => navigate(PATH_ENUM.GRAPH)}
          text={PATH_ENUM.GRAPH}
        />
        <Button
          onClick={() => navigate(PATH_ENUM.LOFI)}
          text={PATH_ENUM.LOFI}
        />
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
