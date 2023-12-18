import { LOFI_AMBIENT, LOFI_MOOD } from "../../../../../types";
import ReactAudioPlayer from "react-audio-player";
import { useLofiStore } from "../../../../../store/lofiStore";

const LofiSettingBoard = () => {
  const [setInitialLoad, currentAmbient] = useLofiStore((state) => [
    state.setInitialLoad,
    state.currentAmbient,
  ]);

  const ambientArray = [
    {
      label: LOFI_AMBIENT.CITY_TRAFFIC,
      volume: currentAmbient[LOFI_AMBIENT.CITY_TRAFFIC],
      src: "assets/musics/",
    },
    {
      label: LOFI_AMBIENT.CITY_RAIN,
      volume: currentAmbient[LOFI_AMBIENT.CITY_RAIN],
      src: "assets/musics/",
    },
    {
      label: LOFI_AMBIENT.PEOPLE,
      volume: currentAmbient[LOFI_AMBIENT.PEOPLE],
      src: "assets/musics/",
    },
    {
      label: LOFI_AMBIENT.RIVER,
      volume: currentAmbient[LOFI_AMBIENT.RIVER],
      src: "assets/musics/",
    },
    {
      label: LOFI_AMBIENT.WIND,
      volume: currentAmbient[LOFI_AMBIENT.WIND],
      src: "assets/musics/",
    },
    {
      label: LOFI_AMBIENT.FIRE_PLACE,
      volume: currentAmbient[LOFI_AMBIENT.FIRE_PLACE],
      src: "assets/musics/",
    },
    {
      label: LOFI_AMBIENT.SUMMER_STORM,
      volume: currentAmbient[LOFI_AMBIENT.SUMMER_STORM],
      src: "assets/musics/",
    },
    {
      label: LOFI_AMBIENT.WAVE,
      volume: currentAmbient[LOFI_AMBIENT.WAVE],
      src: "assets/musics/",
    },
  ];

  const moodArray = [
    {
      label: LOFI_MOOD.CHILL,
    },
    {
      label: LOFI_MOOD.FOCUS,
    },
    {
      label: LOFI_MOOD.SLEEPY,
    },
  ];

  //const ambientVolumeHandler = (name: LOFI_AMBIENT, value: number) => {
  //  setInitialLoad({
  //    ...currentAmbient,
  //    currentAmbient: {
  //
  //    }
  //  } as any)
  //};

  return (
    <div className="absolute text-white left-[175px] flex flex-col justify-between p-2 top-[190px] border-1.5 w-80 h-96 bg-[#14141d] bg-opacity-95 rounded-xl">
      <div className="flex justify-between">
        {moodArray.map((config, index) => {
          return (
            <>
              <div key={index} className="lofi-button w-24 h-24">
                {config.label.toUpperCase()}
              </div>
            </>
          );
        })}
      </div>
      <div className="flex flex-col gap-3">
        {ambientArray.map((config, index) => {
          return (
            <>
              <ReactAudioPlayer
                src="/src of music"
                autoPlay
                volume={config.volume / 100}
                loop
              />
              <div
                key={index}
                className="flex items-center justify-between text-xs"
              >
                <label htmlFor={config.label}>
                  {config.label.toUpperCase()}
                </label>
                <input
                  id={config.label}
                  type="range"
                  min={0}
                  max="100"
                  value={config.volume}
                  onChange={(value) =>
                    console.log(config.label, Number(value.target.value))
                  }
                  className="accent-orange-500 w-32 appearance-none h-4 rounded-full bg-[#24242f]"
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default LofiSettingBoard;
