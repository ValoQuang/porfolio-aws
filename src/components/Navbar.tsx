import { ReactComponent as Search } from "../assets/Search.svg";
import { ReactComponent as Moon } from "../assets/Moon.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full p-navbar font-ibm-plex-mono">
      <div className="flex">
        <button className="rounded-md border-2 border-solid border-gray-800 text-link">
          <p className="p-2">{"{() => fs}"}</p>
        </button>
        <ul className="flex pt-2">
          <li className="pl-10 p-link">About course</li>
          <li className="pl-10 p-link">Course contents</li>
          <li className="pl-10 p-link">FAQ</li>
          <li className="pl-10 p-link">Partners</li>
          <li className="pl-10 p-link">Challenge</li>
        </ul>
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
