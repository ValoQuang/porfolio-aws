import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_USER_INFO } from "../../../graphQL/query";

const GraphqlGithub = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
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
    }
  }, [data, loading, error]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return <div>GraphqlGithub</div>;
};

export default GraphqlGithub;
