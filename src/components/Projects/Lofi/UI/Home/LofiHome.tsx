import LofiHeader from "../Header/LofiHeader";

const LofiHome = () => {
  return (
    <div className="relative flex align-middle items-center justify-between">
      <div className="relative z-[1]">
        <LofiHeader />
      </div>

      <video className="absolute -top-[4px] lofi-video" autoPlay loop muted>
        <source src="/assets/background/Night-clear.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default LofiHome;
