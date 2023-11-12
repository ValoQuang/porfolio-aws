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
                    <li>- Logic, caching</li>
                    <li>- Maintenance</li>
                    <li>- Performance</li>
                  </ul>
                  <br />
                  <p>List of tools used for this repository:</p>
                  <li>- ReactJS</li>
                    <li>- GraphQL</li>
                    <li>- Tailwindcss</li>
                    <li>- S3 bucket</li>
                    <li>- ...</li>
                    <li>- **still hard code, need to fetch from github</li>
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
