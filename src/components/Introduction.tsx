import Buttons from "./Buttons";
import Body from "./Skeleton/Body";
import { GET_USER_INFO } from "../graphQL/query/GetUserInfo";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Card from "./Skeleton/Card";

const Introduction = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const { data, loading, error } = useQuery(GET_USER_INFO, {
    variables: {
      login: `${process.env.REACT_APP_GITHUB_USER}`,
    },
    skip: isDataLoaded, // Skip the query if data is already loaded
    fetchPolicy: "cache-first",
  });

  useEffect(() => {
    if (data && !loading && !error) {
      setIsDataLoaded(true);
    }
  }, [data, loading, error]);

  if (loading) {
    return <p>Loading...</p>;
  }

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
                <p>
                  This project has no name, this is simply showcase place where
                  it have things I have learnt from the beginning of my software
                  development.
                </p>
                <br />
                <div className="flex">
                  Let's go to&nbsp;
                  <Buttons to="about" text="About." />
                </div>
              </div>
            </div>
          </>
        }
        childrenRight={
          <>
            <Card
              children={
                <>
                  <p></p>
                </>
              }
            />
          </>
        }
      />
    </div>
  );
};

export default Introduction;
