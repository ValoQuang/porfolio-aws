import { useDisplayStore } from "../store/displayStore";
import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons";
import ToggleSVG from "./Skeleton/ToggleSVG";
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
            {"{() => fn}"}
          </p>
        </button>
        <div className="flex pl-10 pt-3 justify-between w-custom text-20">
          <Buttons to="about" text="About" />
          <Buttons to="knowledge" text="Knowledge" />
          <Buttons to="blog" text="Blogspot" />
          <Buttons to="contact" text="Contact" />
        </div>
      </div>
      <div className="p-link">
        <div className="flex">
          <button className="flex" onClick={handleDisplayMode}>
            <ToggleSVG isDarkMode={isDarkMode} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
