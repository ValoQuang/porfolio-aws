import { gql } from "@apollo/client";

export const GET_CONTRIBUTION_COLLECTION = gql`
  query ($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

export interface ContributionDay {
  contributionCount: number;
  date: string;
  contributionLevel: string;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

export interface ContributionsCollection {
  contributionCalendar: ContributionCalendar;
}
