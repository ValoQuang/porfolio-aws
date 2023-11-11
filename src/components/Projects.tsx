import { Body, Paragraph } from "./Skeleton";

const Projects = (): JSX.Element => {
  return (
    <>
      <Body
        childrenLeft={
          <>
            <Paragraph
              header={"Projects"}
              children={
                <>
                  <p>
                    This tab contains the knowledge, structure of components and
                    code behind.
                  </p>
                  <br />
                  <p>Main factors to emphasize are:</p>
                  <ul>
                    <li>- Readability</li>
                    <li>- Logic</li>
                    <li>- Maintenance</li>
                    <li>- Performance</li>
                  </ul>
                  <br />
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

export default Projects;
