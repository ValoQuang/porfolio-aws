import { LOFI_AMBIENT, LOFI_MOOD } from "../../../../../types";
import { useLofiStore } from "../../../../../store/lofiStore";
import { useState, Suspense } from "react";
import LofiPlayer from "../Player/LofiPlayer";
import LofiVolumeSlider from "../Button/LofiVolumeSlider";

const mutedIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-14 h-12 lofi-button bg-orange-500 p-[5px] border-none"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
    />
  </svg>
);

const unmutedIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-14 h-12 lofi-button border-none"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
    />
  </svg>
);

const logoImagePath = "/assets/icons/lofi-logo.gif";
const LofiSettingBoard = () => {
  const [muted, setMuted] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [currentAmbient, currentMood, setInitialLoad, reset] = useLofiStore(
    (state) => [
      state.currentAmbient,
      state.currentMood,
      state.setInitialLoad,
      state.reset,
    ]
  );

  const ambientArray = [
    {
      label: LOFI_AMBIENT.CITY_TRAFFIC,
      volume: currentAmbient[LOFI_AMBIENT.CITY_TRAFFIC],
      src: "/assets/ambient/city_traffic.mp3",
    },
    {
      label: LOFI_AMBIENT.PEOPLE,
      volume: currentAmbient[LOFI_AMBIENT.PEOPLE],
      src: "/assets/ambient/people.mp3",
    },
    {
      label: LOFI_AMBIENT.RAIN_FOREST,
      volume: currentAmbient[LOFI_AMBIENT.RAIN_FOREST],
      src: "/assets/ambient/rain_forest.mp3",
    },
    {
      label: LOFI_AMBIENT.RIVER,
      volume: currentAmbient[LOFI_AMBIENT.RIVER],
      src: "/assets/ambient/river.mp3",
    },
    {
      label: LOFI_AMBIENT.WIND,
      volume: currentAmbient[LOFI_AMBIENT.WIND],
      src: "/assets/ambient/wind.mp3",
    },
    {
      label: LOFI_AMBIENT.FIRE_PLACE,
      volume: currentAmbient[LOFI_AMBIENT.FIRE_PLACE],
      src: "/assets/ambient/fireplace.mp3",
    },
    {
      label: LOFI_AMBIENT.SUMMER_STORM,
      volume: currentAmbient[LOFI_AMBIENT.SUMMER_STORM],
      src: "/assets/ambient/summer_storm.mp3",
    },
    {
      label: LOFI_AMBIENT.WAVE,
      volume: currentAmbient[LOFI_AMBIENT.WAVE],
      src: "/assets/ambient/wave.mp3",
    },
    {
      label: LOFI_AMBIENT.SNOW,
      volume: currentAmbient[LOFI_AMBIENT.SNOW],
      src: "/assets/ambient/snow.mp3",
    },
  ];

  const moodArray = [
    {
      label: LOFI_MOOD.CHILL,
    },
    {
      label: LOFI_MOOD.SLEEP,
    },
    {
      label: LOFI_MOOD.JAZZ,
    },
  ];

  const muteVolumeHandler = () => {
    setMuted(!muted);
  };

  const moodButtonHandler = (mood: LOFI_MOOD) => {
    setInitialLoad({
      currentMood: mood,
    });
  };

  const minimizeButtonHandler = () => {
    setMinimized(!minimized);
  };

  const resetButtonHandler = () => {
    reset();
    window.location.reload();
  };

  return (
    <>
      <Suspense>
        <div className="z-10 absolute left-[145px] p-2 top-[190px] overflow-y-scroll lofi-container">
          <div className="flex justify-between">
            <p>{!minimized && "Mixer board"}</p>
            <p onClick={minimizeButtonHandler} className="w-6 h-6 lofi-button">
              -
            </p>
          </div>
          <div
            className={`${
              minimized
                ? "h-[0px] w-[0px] transform scale-x-0 duration-1000 bg-opcacity-0 opacity-0"
                : "duration-1000 transtion pt-2 opacity-100 h-[430px] w-[300px] flex flex-col justify-between"
            }  `}
          >
            <div className="flex justify-between bg-[#24242f] rounded-xl h-24">
              <div className="flex justify-around gap-[4px]">
                {moodArray.map((config, index) => {
                  return (
                    <div
                      onClick={() => moodButtonHandler(config.label)}
                      key={index}
                      className={`${
                        currentMood === config.label && " bg-orange-500"
                      } lofi-button w-[70px] h-24`}
                    >
                      {config.label.toUpperCase()}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col justify-around items-center">
                <div className="rounded-xl" onClick={resetButtonHandler}>
                  <img
                    className="h-12 w-20 hover:cursor-pointer"
                    src={logoImagePath}
                    alt="Lofi Logo"
                  />
                </div>

                <div>
                  <div onClick={muteVolumeHandler}>
                    {muted ? <>{mutedIcon}</> : <>{unmutedIcon}</>}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-2 bg-[#24242f] rounded-xl overflow-y-invisible">
              {ambientArray.map((config, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between text-xs"
                  >
                    <LofiPlayer
                      src={config.src}
                      volume={config.volume}
                      isMuted={muted}
                    />

                    <LofiVolumeSlider config={config} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default LofiSettingBoard;
