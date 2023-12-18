import ReactAudioPlayer from "react-audio-player";

interface lofiPlayerProp {
    src: string;
    volume: number;
    isMuted?: boolean;
    autoPlay?: boolean;
}

const LofiPlayer = ({src, volume, isMuted, autoPlay}: lofiPlayerProp) => {
  return (
    <div>
      <ReactAudioPlayer
        src={src}
        autoPlay
        volume={volume / 100}
        loop
        muted={isMuted}
      />
    </div>
  );
};

export default LofiPlayer;
