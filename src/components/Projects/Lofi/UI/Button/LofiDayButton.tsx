import { useLofiStore } from "../../../../../store/lofiStore";
import { ToggleDarkMode } from "../../../../Skeleton";

const LofiDayButton = () => {
  const [currentDayMode, isDayMode, setInitialLoad, setBackground] =
    useLofiStore((state) => [
      state.currentDayMode,
      state.isDayMode,
      state.setInitialLoad,
      state.setBackground,
    ]);
  const backgroundButtonHandler = () => {
    setInitialLoad({ isDayMode: !isDayMode });
    setBackground(!isDayMode);
  };

  return (
    <div
      onClick={backgroundButtonHandler}
      className="relative inline-flex items-center cursor-pointer transition"
    >
      <ToggleDarkMode currentMode={currentDayMode} isDarkMode={!isDayMode} />
    </div>
  );
};

export default LofiDayButton;
