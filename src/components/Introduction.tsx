import React from "react";
import { ReactComponent as Cubes } from "../assets/Cubes.svg";
const Introduction = () => {
  return (
    <div className="flex bg-gray-400 align-middle font-ibm-plex-mono">
      
      <div className="bg-emerald-600">
        <header className="">My understanding of Web Development, so far</header>
        <p>Quang Truong</p>

        <div>
          Hello I am Quang, a Frontend Engineer. I am working with mainly
          Typescript, ReactJS, GraphQL. My goal at the moment is to look for
          opportunities where I can put my hands-on experience on AWS.
        </div>
      </div>
      <Cubes />
    </div>
  );
};

export default Introduction;
