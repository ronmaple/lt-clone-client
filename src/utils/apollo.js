import {
  from,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
// import { createHttpLink } from 'apollo-link-http'
// import { setContext } from 'apollo-link-context'
// import {
//   InMemoryCache,
//   IntrospectionFragmentMatcher,
// } from 'apollo-cache-inmemory'

import auth from './auth'

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
const httpLink = createHttpLink({
  uri: 'http://localhost:8081/graphql',
})

const authLink = setContext((_, { headers }) => {
  // if (/*logged in and expired*/){
  //   // Refresh token
  // }
  const token = localStorage.getItem('token') || 'test'
  console.log('headers', headers)
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  }
})

const link = from([authLink, httpLink])

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  // uri: 'http://localhost:8081/graphql',
  // request: (operation) => {
  //   console.log('operation', operation)
  //   operation.setContext((context) => ({
  //     headers: {
  //       ...context.headers,
  //       authorization: auth.getIdtoken,
  //     },
  //   }))
  // },
})
