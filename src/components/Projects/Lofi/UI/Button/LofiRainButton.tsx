import { useLofiStore } from "../../../../../store/lofiStore";
import ReactAudioPlayer from "react-audio-player";

const LofiRainButton = () => {
  const [setWeather, setInitialLoad, isRainMode] = useLofiStore((state) => [
    state.setWeather,
    state.setInitialLoad,
    state.isRainMode,
  ]);

  const rainButtonHandler = () => {
    setInitialLoad({ isRainMode: !isRainMode });
    setWeather(!isRainMode);
  };

  return (
    <div
      onClick={rainButtonHandler}
      className="absolute hover:cursor-pointer right-1/4 top-1/4"
    >
      {isRainMode && (
        <div>
          <ReactAudioPlayer
            src="/assets/musics/rain_city.mp3"
            autoPlay
            volume={0.3}
            loop
          />
        </div>
      )}
      <div className="flex items-center justify-center w-14 h-10 rounded-full border-solid border-2 border-white hover:bg-slate-400 transition-all">
        <svg fill="currentColor" viewBox="0 0 16 16" height="28px" width="28px">
          <path
            fill="#ffffff"
            d="M2.658 11.026a.5.5 0 01.316.632l-.5 1.5a.5.5 0 11-.948-.316l.5-1.5a.5.5 0 01.632-.316zm9.5 0a.5.5 0 01.316.632l-.5 1.5a.5.5 0 11-.948-.316l.5-1.5a.5.5 0 01.632-.316zm-7.5 1.5a.5.5 0 01.316.632l-.5 1.5a.5.5 0 11-.948-.316l.5-1.5a.5.5 0 01.632-.316zm9.5 0a.5.5 0 01.316.632l-.5 1.5a.5.5 0 11-.948-.316l.5-1.5a.5.5 0 01.632-.316zm-.753-8.499a5.001 5.001 0 00-9.499-1.004A3.5 3.5 0 103.5 10H13a3 3 0 00.405-5.973zM8.5 1a4 4 0 013.976 3.555.5.5 0 00.5.445H13a2 2 0 010 4H3.5a2.5 2.5 0 11.605-4.926.5.5 0 00.596-.329A4.002 4.002 0 018.5 1zM7.053 11.276A.5.5 0 017.5 11h1a.5.5 0 01.474.658l-.28.842H9.5a.5.5 0 01.39.812l-2 2.5a.5.5 0 01-.875-.433L7.36 14H6.5a.5.5 0 01-.447-.724l1-2z"
          />
        </svg>
      </div>
    </div>
  );
};

export default LofiRainButton;
