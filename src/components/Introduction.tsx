import { ReactComponent as Cubes } from "../assets/Cubes.svg";
import { useDisplayStore } from "../store/displayStore";
import { getBackgroundClass } from "../utils/getBackgroundClass";
import Body from "./Skeleton/Body";

const Introduction = () => {
  const isDarkMode = useDisplayStore((state) => state.lightMode);
  return (
    <div className={`${getBackgroundClass(isDarkMode)}`}>
      <Body
        children={
          <>
            <div>
              <div className="w-70">
                <header className="text-headline font-semibold leading-110">
                  My Spaghetti Playground
                </header>

                <p className="text-name pt-10 pb-10">Quang Truong</p>

                <div className="font-ibm-plex-mono mr-10">
                  <div>
                    <p>Greeting folks,</p>
                    <br />
                    <p>
                      Hello I am Quang, a Frontend Engineer. I am working with
                      mainly Typescript, ReactJS, GraphQL. My goal at the moment
                      is to look for opportunities where I can put my hands-on
                      experience on AWS.
                    </p>
                    <br />
                    <p>
                      This project has no name, this is simply showcase place
                      where it has somethings I have learnt from the beginning
                      of my software development.
                    </p>
                    <br />
                    <p>Let's explore.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pr-10">
              <Cubes />
            </div>
          </>
        }
      />
    </div>
  );
};

export default Introduction;
