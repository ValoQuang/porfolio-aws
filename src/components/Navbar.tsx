import { ReactComponent as Search } from "../assets/Search.svg";
import { ReactComponent as Moon } from "../assets/Moon.svg";
import { ReactComponent as Sun } from "../assets/Sun.svg";
import { initialState, useDisplayStore } from "../store/displayStore";
import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons";

const Navbar = () => {
  const navigate = useNavigate();
  const setDarkMode = useDisplayStore((state) => state.set);

  const handleDisplayMode = () => {
    setDarkMode({
        lightMode: !initialState.lightMode
    });
    console.log(initialState.lightMode);
  }

  return (
    <div className=" fixed text-display bg-display flex justify-between w-full p-navbar font-ibm-plex-mono">
      <div className="flex">
        <button className="rounded-md border-2 border-solid border-gray-800 text-link hover:pointer hover:text-display hover:bg-black">
          <p onClick={() => navigate("/")} className="p-2 font-semibold">
            {"{() => fn}"}
          </p>
        </button>
        <div className="flex pt-2">
          <Buttons to="about" text="Bio" />
          <Buttons to="knowledge" text="Knowledge" />
          <Buttons to="blog" text="Blogspot" />
          <Buttons to="about" text="LinkedIn" />
        </div>
      </div>
      <div className="p-link">
        <div className="flex pl-10 p-link">
          <Search />
          
          <Moon />
          <Sun />
        </div>
        <button onClick={handleDisplayMode}>Mode</button>
      </div>
    </div>
  );
};

export default Navbar;
