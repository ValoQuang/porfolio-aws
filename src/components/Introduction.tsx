import React from "react";
import { ReactComponent as Cubes } from "../assets/Cubes.svg";
const Introduction = () => {
  return (
    <div className="flex p-navbar font-ibm-plex-mono">
      <div className="flex font-ibm-plex-mono">
        <div className="flex flex-wrap flex-auto w-70">
          <header className="text-headline  font-bold leading-110">
            My understanding of Web Development
          </header>
          <p className="text-name">Quang Truong</p>

          <div className="flex font-ibm-plex-mono mr-10">
            Hello I am Quang, a Frontend Engineer. I am working with mainly
            Typescript, ReactJS, GraphQL. My goal at the moment is to look for
            opportunities where I can put my hands-on experience on AWS.
          </div>
        </div>
       
      </div>
      <div className="pr-10">
      <Cubes />
      </div>
    </div>
  );
};

export default Introduction;
