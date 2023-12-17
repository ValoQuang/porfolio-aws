import { useLofiStore } from "../../../../../store/lofiStore";
import { useState } from "react";
import { ToggleDarkMode } from "../../../../Skeleton";

const LofiDayButton = () => {
  const [buttonClick, setButtonClick] = useState(false);
  const [setBackground] = useLofiStore((state) => [state.setBackground]);
  const backgroundButtonHandler = () => {
    setButtonClick(!buttonClick);
    setBackground(!buttonClick);
  };

  return (
    <div
      onClick={backgroundButtonHandler}
      className="relative inline-flex items-center cursor-pointer transition"
    >
      <ToggleDarkMode isDarkMode={!buttonClick} />
    </div>
  );
};

export default LofiDayButton;
