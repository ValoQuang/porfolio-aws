import { useState } from "react";

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
    <div className="flex absolute left-[450px] top-[620px]">
      <div>
        <img
          className="h-20 w-48 hover:scale-150 hover:cursor-pointer"
          src={prevPath}
          alt="Lofi Logo"
        />
      </div>

      <div onClick={playButtonHandler}>
        {play ? (
          <img
            className="h-20 w-48 transition hover:scale-110 hover:cursor-pointer"
            src={playPath}
            alt="Lofi Logo"
          />
        ) : (
          <img
            className="h-20 w-48 transition hover:scale-110 hover:cursor-pointer"
            src={pausePath}
            alt="Lofi Logo"
          />
        )}
      </div>

      <div>
        <img
          className="h-20 w-48 transition hover:scale-110 hover:cursor-pointer"
          src={nextPath}
          alt="Lofi Logo"
        />
      </div>
    </div>
  );
};

export default LofiFooter;
