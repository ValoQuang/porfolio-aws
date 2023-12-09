import { useNavigate } from "react-router-dom";
import { PATH_ENUM } from "../types/routeEnum";
import { Body, Button } from "./Skeleton";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Body
        children={
          <>
            <header className="text-headline font-semibold leading-110">
              Spaghetti Playground
            </header>

            <p className="text-name pt-10 pb-10">Quang Truong</p>

            <div className="font-ibm-plex-mono mr-10">
              <div>
                <p>Greeting folks,</p>
                <br />
                <p>
                  Hello I am Quang, a Frontend Engineer. I am working with
                  mainly Typescript, ReactJS, GraphQL. My goal at the moment is
                  to look for opportunities where I can put my hands-on
                  experience on AWS.
                </p>
                <br />
                <br />
              </div>
            </div>
          </>
        }
      />
    </div>
  );
};

export default Main;
