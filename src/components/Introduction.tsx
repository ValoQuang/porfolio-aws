import Buttons from "./Buttons";
import Body from "./Skeleton/Body";
import { GET_USER_INFO, GetUserInfo } from "../graphQL/query";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";

const Introduction = () => {
  const { loading, data } = useQuery<any>(GET_USER_INFO, {
    variables: {
      id: `${process.env.REACT_APP_GITHUB_USER}`,
    },
    fetchPolicy: 'no-cache'
  });

  useEffect(() => {
    if (!loading) {
      console.log(data?.data.user.bio);
    }
  }, []);

  return (
    <div>
      <Body
        childrenLeft={
          <>
            <header className="text-headline font-semibold leading-110">
              My Spaghetti Playground
            </header>

            <p className="text-name pt-10 pb-10">Quang Truong</p>

            <div className="font-ibm-plex-mono mr-10">
              <p>Greeting folks,</p>
              <br />
              <p>
                Hello I am Quang, a Frontend Engineer. I am working with mainly
                Typescript, ReactJS, GraphQL. My goal at the moment is to look
                for opportunities where I can put my hands-on experience on AWS.
              </p>
              <br />
              <p>
                This project has no name, this is simply showcase place where it
                have things I have learnt from the beginning of my software
                development.
              </p>
              <br />
              <div className="flex">
                Let's go to&nbsp;
                <Buttons to="about" text="About." />
              </div>
            </div>
          </>
        }
        childrenRight={
          <>
            <div className="w-3/12">Picture fetched from github api</div>
          </>
        }
      />
    </div>
  );
};

export default Introduction;
