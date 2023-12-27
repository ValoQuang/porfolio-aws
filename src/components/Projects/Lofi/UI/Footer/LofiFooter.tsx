import { useCallback, useEffect, useRef, useState } from "react";
import { chill_list, jazzy_list, sleep_list } from "../../Data";
import { useLofiStore } from "../../../../../store/lofiStore";
import { LOFI_MOOD } from "../../../../../types";
import { debounce } from "lodash";
import { getTrackDuration } from "../../../../../utils/getDataTime";

type currentTrackProp = {
  name: string;
  src: string;
};

const ICON_PATHS = {
  play: "/assets/icons/play.svg",
  prev: "/assets/icons/prev.svg",
  pause: "/assets/icons/pause.svg",
  next: "/assets/icons/next.svg",
};

const LofiFooter = () => {
  const [play, setPlay] = useState(false);
  const [index, setIndex] = useState(0);
  const [musicVolume, setMusicVolume] = useState(50);
  const [currentTrack, setCurrentTrack] = useState<currentTrackProp>({
    name: "Press start to play",
    src: "",
  });
  const [songDuration, setSongDuration] = useState({
    totalTime: "00:00",
    streamingTime: "00:00",
  });

  const elemAudio = useRef(null);
  const audioElement = elemAudio.current as HTMLAudioElement | null;
  const playListLofi = [...chill_list, ...jazzy_list, ...sleep_list];
  const currentMood = useLofiStore((state) => state.currentMood);

  const [moodPlayList, setMoodPlaylist] =
    useState<currentTrackProp[]>(playListLofi);

  const playingTrack = moodPlayList.map((song) => ({
    src: song.src,
    name: song.name,
  }));

  const playButtonHandler = useCallback(() => {
    setPlay(!play);
    setCurrentTrack(playingTrack[index]);
  }, [playingTrack, index, play]);

  const previousButtonHandler = useCallback(() => {
    if (index === 0) {
      setIndex(moodPlayList.length);
    }
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      setCurrentTrack(playingTrack[newIndex]);
      return newIndex;
    });
  }, [playingTrack, index, moodPlayList.length]);

  const nextButtonHandler = useCallback(() => {
    if (index === moodPlayList.length - 1) {
      setIndex(-1);
    }
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      setCurrentTrack(playingTrack[newIndex]);
      return newIndex;
    });
  }, [playingTrack, index, moodPlayList.length]);

  const volumeButtonHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMusicVolume(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    if (currentMood !== LOFI_MOOD.MIX) {
      const playlistWithMood = playListLofi.filter(
        (list) => list.mood === currentMood
      );
      setMoodPlaylist(playlistWithMood);
    }
    if (index > moodPlayList.length - 1) {
      setIndex(0);
    }
    if (play && audioElement) {
      audioElement.play();
      audioElement.volume = musicVolume / 100;
    } else if (!play && audioElement) {
      audioElement.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    musicVolume,
    index,
    play,
    currentMood,
    moodPlayList.length,
    audioElement,
  ]);

  const autoNextHandler = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      setCurrentTrack(playingTrack[newIndex]);
      return newIndex;
    });
  };

  const loadMetaDataHandler = (meta: any) => {
    if (meta) {
      const { totalTime, totalStreamingTime } = getTrackDuration(meta.target);
      setSongDuration({
        streamingTime: totalStreamingTime,
        totalTime: totalTime,
      });
    }
  };

  return (
    <div className="flex justify-start absolute gap-[12%] items-center m-10 w-[85%] top-[80%]">
      <audio
        ref={elemAudio}
        onEnded={autoNextHandler}
        src={currentTrack.src}
        loop
        onLoadedMetadata={loadMetaDataHandler}
        onTimeUpdate={loadMetaDataHandler}
      ></audio>

      <div className="w-[25%] rounded-md lofi-container p-[3px]  text-sm overflow-x-hidden">
        <div className="flex-start flex gap-4">
          <p>{`${index + 1}/${
            moodPlayList.length
          } with mood "${currentMood}"`}</p>
          <div className="flex gap-[5px]">
            <p>{`${songDuration.streamingTime}`}</p>
            <p>{`${songDuration.totalTime}`}</p>
          </div>
        </div>
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
        <div onClick={debounce(previousButtonHandler, 200)}>
          <img
            className="h-20 w-20 transition hover:scale-110 hover:cursor-pointer"
            src={ICON_PATHS.prev}
            alt="Lofi Logo"
          />
        </div>

        <div onClick={debounce(playButtonHandler, 100)}>
          {play ? (
            <>
              <img
                className="h-24 w-24 transition hover:scale-110 hover:cursor-pointer rounded-full"
                src={ICON_PATHS.pause}
                alt="Lofi Logo"
              />
            </>
          ) : (
            <>
              <img
                className="h-24 w-24 transition hover:scale-110 hover:cursor-pointer rounded-full"
                src={ICON_PATHS.play}
                alt="Lofi Logo"
              />
            </>
          )}
          {play && (
            <>
              <input
                id={currentTrack.name}
                type="range"
                min={0}
                max="100"
                value={musicVolume}
                onChange={volumeButtonHandler}
                className="absolute accent-orange-500 w-96 left-[35%] border-2 opacity-90 bottom-[110%] appearance-none h-4 rounded-full bg-[#191927]"
              />
            </>
          )}
        </div>

        <div onClick={debounce(nextButtonHandler, 200)}>
          <img
            className="h-20 w-20 transition hover:scale-110 hover:cursor-pointer "
            src={ICON_PATHS.next}
            alt="Lofi Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default LofiFooter;
