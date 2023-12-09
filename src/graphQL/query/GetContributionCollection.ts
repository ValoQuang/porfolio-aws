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
            }
          }
        }
      }
    }
  }
`;

interface ContributionDay {
    contributionCount: number;
    date: string;
  }
  
  interface ContributionWeek {
    contributionDays: ContributionDay[];
  }
  
  interface ContributionCalendar {
    totalContributions: number;
    weeks: ContributionWeek[];
  }
  
export interface ContributionsCollection {
    contributionCalendar: ContributionCalendar;
  }
