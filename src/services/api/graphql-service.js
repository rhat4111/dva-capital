import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const graphHttpLink = createHttpLink({
  uri: process.env.VUE_APP_GRAPHQL_URL
});

const fundsHttpLink = createHttpLink({
  uri: process.env.VUE_APP_FUNDS_URL
});

export default {
  graph: new ApolloClient({
    link: graphHttpLink,
    cache: new InMemoryCache()
  }),
  funds: new ApolloClient({
    link: fundsHttpLink,
    cache: new InMemoryCache({
      addTypename: false
    })
  })
};
