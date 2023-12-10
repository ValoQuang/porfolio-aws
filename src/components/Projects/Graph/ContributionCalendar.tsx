import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import ActivityCalendar from "react-activity-calendar";
import { GET_CONTRIBUTION_COLLECTION } from "../../../graphQL/query";
import { transformData } from "../../../utils/transformData";

type ContributionList = {
  date: string;
  count: number;
  level: number;
};

const ContributionCalendar = () => {
  const [contributes, setContributes] = useState<ContributionList[]>([]) as any;
  const { data, loading, error } = useQuery(GET_CONTRIBUTION_COLLECTION, {
    variables: {
      username: `${process.env.REACT_APP_GITHUB_USER}`,
      fetchPolicy: "cache-first",
    },
  });

  useEffect(() => {
    if (data && !loading && !error) {
      setContributes(
        transformData(
          data?.user?.contributionsCollection.contributionCalendar.weeks
        )
      );
    }
  }, [data]);

  return (
    <div>
      <ActivityCalendar
        data={contributes}
        labels={{
          legend: {
            less: "Less",
            more: "More",
          },
          months: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          totalCount: `${
            data?.user?.contributionsCollection.contributionCalendar
              .totalContributions
          } contributions in ${"2023"}`,
          weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        }}
      />
    </div>
  );
};

export default ContributionCalendar;
