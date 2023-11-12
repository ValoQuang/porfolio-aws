import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_USER_INFO } from "../../../graphQL/query";
import { Body, Card, Paragraph } from "../../Skeleton";
import {
  getFromLocalStorage,
  setInLocalStorage,
} from "../../../utils/localStorage";
import { LOCAL_STORAGE } from "../../../types/localStorageEnum";

interface User {
  avatarUrl: string;
  bio: string;
  company: string;
  contributionsCollection: {
    contributionCalendar: {
      __typename: "ContributionCalendar";
      totalContributions: number;
      weeks: Array<any>; // You may need to define a more specific type for the 'weeks' array
    };
    __typename: "ContributionsCollection";
  };
  createdAt: string;
  email: string;
  location: string;
  name: string;
}

interface UserObjectProp {
  user: User;
}

const GraphqlGithub = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [info, setInfo] = useState<UserObjectProp>();
  const { data, loading, error } = useQuery(GET_USER_INFO, {
    variables: {
      login: `${process.env.REACT_APP_GITHUB_USER}`,
    },
    skip: isDataLoaded,
    fetchPolicy: "cache-first",
  });

  useEffect(() => {
    if (data && !loading && !error) {
      setIsDataLoaded(true);
      setInLocalStorage(LOCAL_STORAGE.USER, JSON.stringify(data));
    }

    if (getFromLocalStorage(LOCAL_STORAGE.USER)) {
      setInfo(JSON.parse(getFromLocalStorage(LOCAL_STORAGE.USER)));
    }
  }, [data, error, loading]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Body
        childrenLeft={
          <>
            <Paragraph
              header={"GraphQL API"}
              children={
                <>
                  <p>GraphQL API practice</p>
                  <br />
                  <p>
                    The token is created to authorize the connection between app
                    and Github API.
                  </p>
                  <br />
                  <p>The query are simply personal information on github.</p>
                  <br />
                  <p>
                    This excercise focuses on making Client.ts and apply
                    middleware for error logging.
                  </p>
                  <br />
                </>
              }
            />
          </>
        }
        childrenRight={
          <>
            <Card
              children={
                <>
                  <div className="flex flex-col items-center">
                    <div className="justify-around">
                      <img
                        className="align-middle rounded-full w-48 h-48"
                        src={info?.user.avatarUrl}
                        alt="alt me"
                      />
                    </div>
                    <div>{info?.user.bio}</div>
                    <div>{info?.user.email}</div>
                    <div>{info?.user.location}</div>
                    <div>{info?.user.company}</div>
                  </div>
                </>
              }
            />
          </>
        }
      />
    </>
  );
};

export default GraphqlGithub;
