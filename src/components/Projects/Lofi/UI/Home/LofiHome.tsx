import { useLofiStore } from "../../../../../store/lofiStore";
import { LOFI_BACKGROUND, LOFI_WEATHER } from "../../../../../types";

const VIDEO_SRC = {
  DAY : "/assets/background/Day-sunny.mp4",
  DAY_RAIN : "/assets/background/Day-rainny.mp4",
  NIGHT: "/assets/background/Night-clear.mp4",
  NIGHT_RAIN: "/assets/background/Night-rainny.mp4",
}

const LofiHome = () => {
  const [currentDayMode, currentWeatherMode] = useLofiStore((state) => [
    state.currentDayMode,
    state.currentWeatherMode,
  ]);
  const combineMode = `${currentDayMode}-${currentWeatherMode}`;
  const backgroundArray = [
    {
      bg: LOFI_BACKGROUND.DAY,
      weather: LOFI_WEATHER.SUNNY,
      videoSrc: VIDEO_SRC.DAY,
    },
    {
      bg: LOFI_BACKGROUND.DAY,
      weather: LOFI_WEATHER.RAIN,
      videoSrc: VIDEO_SRC.DAY_RAIN,
    },
    {
      bg: LOFI_BACKGROUND.NIGHT,
      weather: LOFI_WEATHER.SUNNY,
      videoSrc: VIDEO_SRC.NIGHT,
    },
    {
      bg: LOFI_BACKGROUND.NIGHT,
      weather: LOFI_WEATHER.RAIN,
      videoSrc: VIDEO_SRC.NIGHT_RAIN,
    },
  ];

  return (
    <>
      {backgroundArray.map((config, index) => (
        <video
          key={index}
          preload="metadata"
          className={`${
            combineMode === `${config.bg}-${config.weather}`
              ? "videoIn"
              : "videoOut"
          }`}
          autoPlay
          loop
          muted
        >
          <source src={config.videoSrc} type="video/mp4" />
        </video>
      ))}
    </>
  );
};

export default LofiHome;
