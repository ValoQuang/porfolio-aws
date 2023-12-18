import { useState } from "react";
import LofiPlayer from "../Player/LofiPlayer";
import { chill_list, jazzy_list, sleep_list } from "../../Data";

const LofiFooter = () => {
  const playPath = "/assets/icons/play.svg";
  const prevPath = "/assets/icons/prev.svg";
  const pausePath = "/assets/icons/pause.svg";
  const nextPath = "/assets/icons/next.svg";
  const [play, setPlay] = useState(false);
  const playListLofi = [...chill_list, ...jazzy_list, ...sleep_list];
  const currentSong = playListLofi.map((song) => song.src);

  const playButtonHandler = () => {
    setPlay(!play);
  };

  return (
    <div className="flex justify-between absolute items-center w-[58%] p-10 top-[560px]">
      <div className="w-64 rounded-md lofi-container p-[5px] text-sm overflow-x-hidden">
        <div className="animate-text-slide flex items-center gap-[5px]">
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
          {chill_list[0].name}
        </div>

      </div>
      <div className="flex gap-10 items-center">
        <div>
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
              <LofiPlayer
                src={chill_list[0].src}
                volume={100}
                autoPlay={play}
              />
            </>
          ) : (
            <img
              className="h-24 w-24 transition hover:scale-110 hover:cursor-pointer border-2 hover:border-orange-400 rounded-full"
              src={playPath}
              alt="Lofi Logo"
            />
          )}
        </div>

        <div>
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
