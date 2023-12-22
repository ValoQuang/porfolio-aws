import { useLofiStore } from "../../../../../store/lofiStore";
import { LOFI_BACKGROUND, LOFI_WEATHER } from "../../../../../types";

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
      videoSrc: "/assets/background/Day-sunny.mp4",
    },
    {
      bg: LOFI_BACKGROUND.DAY,
      weather: LOFI_WEATHER.RAIN,
      videoSrc: "/assets/background/Day-rainny.mp4",
    },
    {
      bg: LOFI_BACKGROUND.NIGHT,
      weather: LOFI_WEATHER.SUNNY,
      videoSrc: "/assets/background/Night-clear.mp4",
    },
    {
      bg: LOFI_BACKGROUND.NIGHT,
      weather: LOFI_WEATHER.RAIN,
      videoSrc: "/assets/background/Night-rainny.mp4",
    },
  ];

  return (
    <>
      {backgroundArray.map((config, index) => (
        <video
          key={index}
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
