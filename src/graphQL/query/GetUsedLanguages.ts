import { gql } from "@apollo/client";

export const GET_USED_LANGUAGE = gql`
  query GetUsedLanguages($login: String!) {
    user(login: $login) {
      repositories(ownerAffiliations: OWNER, first: 10) {
        nodes {
          name
          languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
            edges {
              size
              node {
                color
                name
              }
            }
          }
        }
      }
    }
  }
`;

export interface LanguageNode {
  name: string;
  languages: {
    edges: Array<{
      size: number;
      node: {
        color: string;
        name: string;
      };
    }>;
  };
}
export interface LanguageNodeArray extends Array<LanguageNode> {}

export interface UsedLanguages {
  user: {
    repositories: {
      nodes: Array<LanguageNode>;
    };
  };
}
