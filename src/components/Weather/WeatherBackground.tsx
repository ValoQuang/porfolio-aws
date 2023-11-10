import React from "react";

const WeatherBackground = () => {
  return (
    <>
      <video autoPlay loop muted>
        <source src="/assets/rain.mp4" type="video/mp4" />
      </video>

      <video autoPlay loop muted>
        <source src="/assets/sun.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default WeatherBackground;
