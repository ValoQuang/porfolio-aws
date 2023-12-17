import { useLofiStore } from "../../../../../store/lofiStore";
import { LOFI_BACKGROUND, LOFI_WEATHER } from "../../../../../types";

const LofiHome = () => {
  const [currentDayMode, currentWeatherMode] = useLofiStore((state) => [
    state.currentDayMode,
    state.currentWeatherMode,
  ]);
  const combineMode = `${currentDayMode}-${currentWeatherMode}`;

  return (
    <div className="relative flex align-middle items-center justify-between">
      <div className="absolute lofi-video">
        <video
          className={
            combineMode === `${LOFI_BACKGROUND.DAY}-${LOFI_WEATHER.SUNNY}`
              ? "videoIn"
              : "videoOut"
          }
          autoPlay
          loop
          muted
        >
          <source src="/assets/background/Day-sunny.mp4" type="video/mp4" />
        </video>

        <video
          className={
            combineMode === `${LOFI_BACKGROUND.DAY}-${LOFI_WEATHER.RAIN}`
              ? "videoIn"
              : "videoOut"
          }
          autoPlay
          loop
          muted
        >
          <source src="/assets/background/Day-rainny.mp4" type="video/mp4" />
        </video>

        <video
          className={
            combineMode === `${LOFI_BACKGROUND.NIGHT}-${LOFI_WEATHER.SUNNY}`
              ? "videoIn"
              : "videoOut"
          }
          autoPlay
          loop
          muted
        >
          <source src="/assets/background/Night-clear.mp4" type="video/mp4" />
        </video>

        <video
          className={
            combineMode === `${LOFI_BACKGROUND.NIGHT}-${LOFI_WEATHER.RAIN}`
              ? "videoIn"
              : "videoOut"
          }
          autoPlay
          loop
          muted
        >
          <source src="/assets/background/Night-rainny.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default LofiHome;
