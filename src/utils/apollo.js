import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
}

// TODO when the server is created
// const httpLink = createHttpLink({ uri: /* apiUrl/grapql */ })
// const authLink = setContext(async (_, { headers }) => {
//   if (/*logged in and expired*/){
//     // Refresh token
//   }

//   return {
//     headers: {
//       ...headers,
//       authorization: `Bearer ${/*token id*/}`
//     }
//   }
// })

export const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
})
