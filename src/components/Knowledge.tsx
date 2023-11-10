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
                  <br />
                  In general, instead of creating multiple {"<Route />"}{" "}
                  component, one {"router.tsx"} is created and it define the
                  path and its child component. This way it is easier to check
                  setup the route.
                </>
              }
            />
          </>
        }
        childrenRight={
          <div className="bg-lime-600 h-full w-full">
            <img className="object-fill h-full w-full" src="/assets/pictures/router.png" alt="router code"/>
          </div>
        }
      />
    </>
  );
};

export default Knowledge;
