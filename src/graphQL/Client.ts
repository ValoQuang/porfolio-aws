import { ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client";
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";

const httpLink = new BatchHttpLink({
  uri: `${process.env.REACT_APP_GITHUB_API}`,
  fetchOptions: {
    mode: "no-cors",
  },
  credentials: 'same-origin',
});

// Define a middleware to add the authorization token to the headers
const authMiddleware = setContext((_, { headers }: any) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  };
});

//Define a errorLink message to track the source of error, if happened
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const cache = new InMemoryCache();
const link = ApolloLink.from([
  authMiddleware as unknown as ApolloLink,
  httpLink,
  errorLink as unknown as ApolloLink,
]);

export const Client = new ApolloClient({
  link,
  cache,
} as any);
