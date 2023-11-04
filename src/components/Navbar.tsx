import React from "react";

const Navbar = () => {
  return (
    <header className="p-8 text-custom-1 bg-custom-1 text-xl ">
      <div className="flex font-ibm-plex-mono bg-black justify-between">
        <div className="flex justify-around">
          <div>{"{() => fs}"}</div>

          <ul className="flex space-x-10">
            <li>About me</li>
            <li>My skill</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div className="flex justify-around">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </div>

          <button>English</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
