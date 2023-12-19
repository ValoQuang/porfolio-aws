import { useEffect, useRef, useState } from "react";
import { chill_list, jazzy_list, sleep_list } from "../../Data";

type currentTrackProp = {
  name: string;
  src: string;
};
const LofiFooter = () => {
  const playPath = "/assets/icons/play.svg";
  const prevPath = "/assets/icons/prev.svg";
  const pausePath = "/assets/icons/pause.svg";
  const nextPath = "/assets/icons/next.svg";

  const [play, setPlay] = useState(false);
  const elemAudio = useRef(null);
  const [currentTrack, setCurrentTrack] = useState<currentTrackProp>({
    name: "Press start to play",
    src: "",
  });
  const [index, setIndex] = useState(0);
  const [musicVolume, setMusicVolume] = useState(50);

  const playListLofi = [...chill_list, ...jazzy_list, ...sleep_list];
  const currentSong = playListLofi.map((song) => ({
    src: song.src,
    name: song.name,
    id: song.mood,
  }));

  const playButtonHandler = () => {
    setPlay(!play);
    setCurrentTrack(currentSong[index]);
  };

  const previousButtonHandler = () => {
    if (index === 0) {
      setIndex(playListLofi.length);
    }
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      setCurrentTrack(currentSong[newIndex]);
      return newIndex;
    });
  };
  const nextButtonHandler = () => {
    if (index === playListLofi.length - 1) {
      setIndex(-1);
    }
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      setCurrentTrack(currentSong[newIndex]);
      return newIndex;
    });
  };

  useEffect(() => {
    if (play && elemAudio.current !== null) {
      const audioElement = elemAudio.current as HTMLAudioElement;
      audioElement.play();
      audioElement.volume = musicVolume / 100;
    } else if (!play && elemAudio.current !== null) {
      const audioElement = elemAudio.current as HTMLAudioElement;
      audioElement.pause();
    }
  }, [musicVolume, play, index]);

  return (
    <div className="flex justify-between absolute items-center w-[58%] p-10 top-[560px]">
      <audio ref={elemAudio} src={currentTrack.src} loop></audio>

      {play && (
        <>
          <input
            id={currentTrack.name}
            type="range"
            min={0}
            max="100"
            value={musicVolume}
            onChange={(event) => {
              if (elemAudio.current && "volume" in elemAudio.current) {
                (elemAudio.current as { volume: number }).volume = musicVolume / 100;
              }
              setMusicVolume(parseInt(event.target.value, 10));
            }}
            className="absolute accent-orange-500 w-96 left-[435px] border-none opacity-90 lofi-button bottom-[150px] appearance-none h-4 rounded-full bg-[#191927]"
          />
        </>
      )}

      <div className="w-72 rounded-md lofi-container p-[1px] text-sm overflow-x-hidden">
        <div>{`At ${index + 1}/${playListLofi.length}`}</div>
        <div className="animate-text-slide flex items-center p-[2px] w-56 gap-[5px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
            />
          </svg>
          {currentTrack.name}
        </div>
      </div>

      <div className="flex gap-10 items-center">
        <div onClick={previousButtonHandler}>
          <img
            className="h-20 w-20 transition hover:scale-110 hover:cursor-pointer lofi-button"
            src={prevPath}
            alt="Lofi Logo"
          />
        </div>

        <div onClick={playButtonHandler}>
          {play ? (
            <>
              <img
                className="h-24 w-24 transition hover:scale-110 hover:cursor-pointer  border-2 hover:border-orange-400 rounded-full"
                src={pausePath}
                alt="Lofi Logo"
              />
            </>
          ) : (
            <>
              <img
                className="h-24 w-24 transition hover:scale-110 hover:cursor-pointer border-2 hover:border-orange-400 rounded-full"
                src={playPath}
                alt="Lofi Logo"
              />
            </>
          )}
        </div>

        <div onClick={nextButtonHandler}>
          <img
            className="h-20 w-20 transition hover:scale-110 hover:cursor-pointer lofi-button"
            src={nextPath}
            alt="Lofi Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default LofiFooter;
