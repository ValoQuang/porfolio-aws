import { Body, Paragraph } from "./Skeleton";
import { getCountDays } from "../utils/getCountDays";

const Main = () => {
  return (
    <div>
      <Body
        children={
          <>
            <header className="text-headline font-semibold leading-110 mb-10">
              Spaghetto
            </header>
            <Paragraph
              header={"Quang Truong"}
              children={
                <>
                  <p>Greeting folks,</p>
                  <br />
                  <p>
                    Hello I am Quang, a Frontend Engineer. I am working with
                    mainly Typescript, ReactJS, GraphQL. This is my spaghetti
                    ghetto place where I just practice my coding skill.
                  </p>
                </>
              }
            />
            <div>
              <br />
              <Paragraph
                header={"SWE background"}
                children={
                  <>
                    <p>
                      From the trainee to Frontend engineer, I have worked with
                      wide range of tools and technologies.
                    </p>
                    <br />
                    <p>
                      After {getCountDays()} days, the most common language,
                      framework, tools I have worked came down to: Typescript,
                      ReactJS, GraphQL, SCSS, Material UI, TailwindCSS
                    </p>
                    <br />
                    <p>
                      During my career, I came to realization that AWS is
                      crucial nowadays, hence I also equiped myself with AWS
                      solution architect certificate and hoping to dive deeper
                      into the AWS system.
                    </p>
                  </>
                }
              />
              <br />
            </div>
          </>
        }
      />
    </div>
  );
};

export default Main;
