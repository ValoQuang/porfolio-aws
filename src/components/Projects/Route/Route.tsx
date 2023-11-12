import { Body, Paragraph } from "../../Skeleton";

const Route = (): JSX.Element => {
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
                    This tab demonstrates the use of React Router.
                  </p>
                  <br />
                  <p>
                    React Router version 6 introduces several powerful new
                    features, as well as improved compatibility with the latest
                    versions of React.
                  </p>
                  <br />
                  <p>
                    In general, instead of creating multiple {"<Route />"}{" "}
                    component, one {"router.tsx"}.
                  </p>
                  <br />
                  <p>
                    On the navigation bar, the button Next and Back will
                    lead user through all the path without any additional mouse
                    activity.
                  </p>
                </>
              }
            />
          </>
        }
        childrenRight={<></>}
      />
    </>
  );
};

export default Route;
