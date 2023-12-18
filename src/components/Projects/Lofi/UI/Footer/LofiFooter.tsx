import { useState } from "react";
import LofiPlayer from "../Player/LofiPlayer";
import { chill_list } from "../../Data";

const LofiFooter = () => {
  const playPath = "/assets/icons/play.svg";
  const prevPath = "/assets/icons/prev.svg";
  const pausePath = "/assets/icons/pause.svg";
  const nextPath = "/assets/icons/next.svg";
  const [play, setPlay] = useState(false);

  const playButtonHandler = () => {
    setPlay(!play);
  };

  return (
    <div className="flex justify-between absolute items-center w-[60%] p-10 top-[560px]">
      <div className="w-80 rounded-md bg-opacity-70 bg-white ">Current song</div>
      <div className="flex">
        <div>
          <img
            className="h-20 w-20 transition hover:scale-150 hover:cursor-pointer"
            src={prevPath}
            alt="Lofi Logo"
          />
        </div>

        <div onClick={playButtonHandler}>
          {play ? (
            <>
              <img
                className="h-20 w-48 transition hover:scale-110 hover:cursor-pointer"
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
              className="h-20 w-48 transition hover:scale-110 hover:cursor-pointer"
              src={playPath}
              alt="Lofi Logo"
            />
          )}
        </div>

        <div>
          <img
            className="h-20 w-20 transition hover:scale-110 hover:cursor-pointer"
            src={nextPath}
            alt="Lofi Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default LofiFooter;
