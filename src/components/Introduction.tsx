import React from "react";
import { ReactComponent as Cubes } from "../assets/Cubes.svg";
import Body from "./Skeleton/Body";

const Introduction = () => {
  return (
    <>
      <Body
        children={
          <>
            <div className="flex font-ibm-plex-mono w-70">
              <div className="w-70">
                <header className="text-headline font-semibold leading-110">
                  My software development Playground
                </header>

                <p className="text-name pt-10 pb-10">Quang Truong</p>

                <div className="font-ibm-plex-mono mr-10">
                  <div className="typewriter">
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
    </>
  );
};

export default Introduction;
