import { ContributionWeek, ContributionDay } from "../graphQL/query";
import { CONTRIBUTION_LEVEL } from "../types";

export const transformData = (data: ContributionWeek[]) => {
  const reducedData = data.reduce<ContributionDay[]>(
    (prev: ContributionDay[], cur: ContributionWeek) => {
      return prev.concat(cur.contributionDays);
    },
    []
  );

  const convertStringToLevel = (levelString: string): number => {
    switch (levelString) {
      case 'NONE':
        return CONTRIBUTION_LEVEL.NONE;

      case 'FIRST_QUARTILE':
        return CONTRIBUTION_LEVEL.FIRST_QUARTILE;

      case 'SECOND_QUARTILE':
        return CONTRIBUTION_LEVEL.SECOND_QUARTILE;

      case 'THIRD_QUARTILE':
        return CONTRIBUTION_LEVEL.THIRD_QUARTILE;

      case 'FOURTH_QUARTILE':
        return CONTRIBUTION_LEVEL.FOURTH_QUARTILE;

      default:
        return CONTRIBUTION_LEVEL.NONE;
    }
  };

  const transfomedData = reducedData.map((value) => ({
    date: value.date,
    count: value.contributionCount,
    level: convertStringToLevel(value.contributionLevel),
  }));

  return transfomedData;
};
