import { LOFI_BACKGROUND } from "../../types";

interface ToggleDarkModeProp {
  isDarkMode: boolean;
  currentMode?: string;
}

const ToggleDarkMode = ({ currentMode, isDarkMode }: ToggleDarkModeProp) => {
  const commonAttributes = {
    className: "w-8 h-8 md:w-10 md:h-10",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
  };

  return (
    <svg {...commonAttributes}>
      {!isDarkMode && currentMode !== LOFI_BACKGROUND.DAY ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#ffffff"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      ) : (
        <path
          fill="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      )}
    </svg>
  );
};

export default ToggleDarkMode;
