import Paragraph from "../../Skeleton/Paragraph";
import { Body, Card } from "../../Skeleton/";

//<video autoPlay loop muted>
//<source src="/assets/sun.mp4" type="video/mp4" />
//</video>

const CustomBackground = () => {
  return (
    <>
      <Body
        childrenLeft={
          <Paragraph
            header={"State management"}
            children={
              <>
                <p>
                  In this project, Zustand was used, primarily for its minimal
                  setup and simplicity. Furthermore, Zustand is recommended for
                  small application compared to Redux which is suitable for
                  larger scale project.
                </p>
                <br />
                <p>
                  The demonstration is found on the rigt side, the background
                  can be switched with customed video background by pressing the
                  button.
                </p>
                <p>Also clean code is always an goal.</p>
                <br />
                <p>
                  Logic:
                  <ul>
                    <li>- Create store for state management with Zustand.</li>
                    <li>
                      - Implement component for Custom background and place in
                      router.tsx.
                    </li>
                    <li>
                      - Create function to switch between background, state is
                      updated to the store.
                    </li>
                  </ul>
                </p>
              </>
            }
          />
        }
        childrenRight={
          <>
            <Card
              children={
                <div className="">
                  <button>Click to try</button>
                </div>
              }
            />
          </>
        }
      />
    </>
  );
};

export default CustomBackground;
