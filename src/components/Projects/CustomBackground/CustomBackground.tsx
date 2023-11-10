import React from "react";
import Paragraph from "../../Skeleton/Paragraph";

const CustomBackground = () => {
  return (
    <>
      <Paragraph
        header={"State management"}
        children={
          <>
            <p>
              In this project, Zustand was used, primarily for its minimal setup
              and simplicity. Furthermore, Zustand is recommended for small
              application compared to Redux which is suitable for larger scale
              project.
            </p>
            <br />
            <p>
              The demonstration is found on the rigt side, the background can be
              switched with customed video background by pressing the button.
            </p>
            <p>Also clean code is always an goal.</p>
          </>
        }
      />
      <video autoPlay loop muted>
        <source src="/assets/rain.mp4" type="video/mp4" />
      </video>

      <video autoPlay loop muted>
        <source src="/assets/sun.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default CustomBackground;
