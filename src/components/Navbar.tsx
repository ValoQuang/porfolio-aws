import { ReactComponent as Search } from "../assets/Search.svg";
import { ReactComponent as Moon } from "../assets/Moon.svg";
import Buttons from "./Buttons";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full p-navbar font-ibm-plex-mono">
      <div className="flex">
        <button className="rounded-md border-2 border-solid border-gray-800 text-link hover:pointer hover:text-white hover:bg-black">
          <p className="p-2 font-semibold">{"{() => fs}"}</p>
        </button>
        <div className="flex pt-2">
          <Buttons text="About course" />
          <Buttons text="Course content" />
          <Buttons text="FAQ" />
          <Buttons text="Partners" />
          <Buttons text="Challenge" />
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
