import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Calendar from "react-activity-calendar";
import { GET_CONTRIBUTION_COLLECTION } from "../../../graphQL/query";

const ContributionCalendar = () => {
  const [contributes, setContributes] = useState<any>();
  const { data, loading, error } = useQuery(GET_CONTRIBUTION_COLLECTION, {
    variables: {
      username: `${process.env.REACT_APP_GITHUB_USER}`,
      fetchPolicy: "cache-first",
    },
  });

  useEffect(() => {
    if (data && !loading && !error) {
      setContributes(
        data?.user?.contributionsCollection.contributionCalendar.weeks.reduce(
          (prev: string | any[], cur: { contributionDays: any }) => {
            return prev.concat(cur.contributionDays);
          },
          [] as unknown
        )
      );
      console.log(contributes);
    }
    console.log();
  }, [data]);

  return <div>tadah</div>;
};

export default ContributionCalendar;
