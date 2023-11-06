import Body from "./Skeleton/Body";
//import { getCoordinate } from "../utils/getCoordinate";
import { getCountDays } from "../utils/getCountDays";
import Buttons from "./Buttons";
import Paragraph from "./Skeleton/Paragraph";

const About = (): JSX.Element => {
  return (
    <div className="flex w-full">
      <Body
        childrenLeft={
          <>
            <Paragraph
              header={"Education background"}
              children={
                <>
                  <p>
                    I came to Finland in 2014, as a student back then, I studied
                    in Metropolia UAS in Electrical Engineering.
                  </p>
                  <br />
                  <p>
                    During study and after graduation in 2018, I have been
                    working in different industries, in order to sharpen my
                    social skills and built my solid work attitude.
                  </p>
                  <br />
                  <p>
                    During 2021 - 2023, I came to software development and
                    started to work as software engineer in early 2022 -
                    Present.
                  </p>
                </>
              }
            />
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
                    During my career, I came to realization that AWS is crucial
                    nowadays, hence I also equiped myself with AWS solution
                    architect certificate and hoping to dive deeper into the AWS
                    system.
                  </p>
                </>
              }
            />
            <p className="flex">
              Now let's move to &nbsp;
              <Buttons to="/knowledge" text="Knowledge" />
              &nbsp; tab, I showcase what I stuffed here.
            </p>
          </>
        }
        childrenRight={
          <>
            {" "}
            <div className="w-3/12 bg-lime-600">
              Card for personal Info here fetched from github API
            </div>
          </>
        }
      />
    </div>
  );
};

export default About;
