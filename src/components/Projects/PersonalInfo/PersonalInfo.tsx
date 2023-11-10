import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_USER_INFO } from "../../../graphQL/query";

const PersonalInfo = () => {
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
  return <div>PersonalInfo</div>;
};

export default PersonalInfo;
