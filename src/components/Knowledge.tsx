import Buttons from "./Buttons";
import Body from "./Skeleton/Body";
import Paragraph from "./Skeleton/Paragraph";
import WeatherBackground from "./Weather/WeatherBackground";

const Knowledge = (): JSX.Element => {
  return (
    <>
      
      <Body
        childrenLeft={
          <>
            <Paragraph
              header={"Routing"}
              children={
                <>
                  <p>
                    React-router-dom version 6.18.0 makes heavy use of React
                    hooks, so React 16.8 or greater is needed to upgrade along
                    to apply React Router v6.
                  </p>
                  <br />
                  <p>
                    React Router version 6 introduces several powerful new
                    features, as well as improved compatibility with the latest
                    versions of React. It also introduces a few breaking changes
                    from version 5
                  </p>
                </>
              }
            />
            <Paragraph
              header={"State management"}
              children={
                <>
                  <p>
                    In this project, Zustand was used, primarily for its minimal
                    setup and simplicity. Furthermore, Zustand is recommended
                    for small application compared to Redux which is suitable
                    for larger scale project.
                  </p>
                  <br />
                  <p>
                    The demonstration is found on the rigt side, the background
                    can be switched with customed video background by pressing
                    the button.
                  </p>
                  <p>Also clean code is always an goal.</p>
                </>
              }
            />
          </>
        }
        childrenRight={<>Card</>}
      />
    </>
  );
};

export default Knowledge;
