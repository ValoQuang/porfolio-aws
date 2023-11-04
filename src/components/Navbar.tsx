import { ReactComponent as Search } from "../assets/Search.svg";
import { ReactComponent as Moon } from "../assets/Moon.svg";
import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed bg-white flex justify-between w-full p-navbar font-ibm-plex-mono">
      <div className="flex">
        <button className="rounded-md border-2 border-solid border-gray-800 text-link hover:pointer hover:text-white hover:bg-black">
          <p
            onClick={() => navigate('/')}
            className="p-2 font-semibold"
          >
            {"{() => fn}"}
          </p>
        </button>
        <div className="flex pt-2">
          <Buttons to="about" text="Bio" />
          <Buttons to="/knowledge" text="Work experience" />
          <Buttons to="/aboutsdasdas" text="Blogspot" />
          <Buttons to="/about" text="LinkedIn" />
        </div>
      </div>
      <div className="p-link">
        <div className="flex pl-10 p-link">
          <Search />
          <Moon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
