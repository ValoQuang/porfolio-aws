const LofiHome = () => {
  return (
    <div className="flex justify-center items-center">
      <video className="lofi-video" autoPlay loop muted>
        <source src="/assets/background/Night-clear.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default LofiHome;
