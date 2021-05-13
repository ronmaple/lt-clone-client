import React, { useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { client } from './utils/apollo'
import Routes from './routes'
import Theme from './styles/Theme'

function App() {
  // TODO
  // 3. React router-done / Loadable

  // 4. helmet

  // 5. /public folder
  return (
    <>
      <Helmet>
        <title>Lt Clone</title>
        <meta name="Lt Clone" content="Lt Clone" />
      </Helmet>
      <ApolloProvider client={client}>
        <Theme>
          <Routes />
        </Theme>
      </ApolloProvider>
    </>
  )
}

export default App
