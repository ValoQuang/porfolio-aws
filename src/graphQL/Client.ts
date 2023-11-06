import { ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client";
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { onError } from "@apollo/client/link/error";

const httpLink = new BatchHttpLink({
  uri: `${process.env.REACT_APP_GITHUB_API}/graphql`,
});

// Define a middleware to add the authorization token to the headers
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });
  return forward(operation);
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

export const Client = new ApolloClient({
  link: ApolloLink.from([errorLink, authMiddleware, httpLink]),
  cache,
} as any);
