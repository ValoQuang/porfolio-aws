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
      <div className="flex pl-10 pt-3 justify-between text-20 w-7/12">
        <Button onClick={() => navigate("/")} text={PATH_ENUM.MAIN} />
        <Button
          onClick={() => navigate(PATH_ENUM.ABOUT)}
          text={PATH_ENUM.ABOUT}
        />
        <Button
          onClick={() => navigate(PATH_ENUM.PROJECTS)}
          text={PATH_ENUM.PROJECTS}
        />
        <Button
          onClick={() => navigate(`${PATH_ENUM.PROJECTS}/${PATH_ENUM.GRAPH}`)}
          text={PATH_ENUM.GRAPH}
        />
        <Button
          onClick={() => navigate(`${PATH_ENUM.PROJECTS}/${PATH_ENUM.LOFI}`)}
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
