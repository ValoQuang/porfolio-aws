import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import ActivityCalendar from "react-activity-calendar";
import { GET_CONTRIBUTION_COLLECTION } from "../../../../graphQL/query";
import { transformData } from "../../../../utils/transformData";
import { Tooltip as ReactTooltip } from "react-tooltip";
import React from "react";

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
  }, [data, error, loading]);

  return (
    <div>
      <ReactTooltip id="react-tooltip" />
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ActivityCalendar
          blockSize={10}
          data={contributes}
          theme={{
            light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
            dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
          }}
          renderBlock={(block, activity) =>
            React.cloneElement(block, {
              "data-tooltip-id": "react-tooltip",
              "data-tooltip-html": `${activity.count} activities on ${activity.date}`,
            })
          }
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
      )}
    </div>
  );
};

export default ContributionCalendar;
