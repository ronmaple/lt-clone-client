import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import Auth from './utils/auth'
import Routes from './routes'
import Theme from './styles/Theme'

// TODO: separate route file, with code split
function App() {
  // TODO
  // 1. Configure Redux

  // 2. Styled components

  // 3. React router / Loadable

  // 4. helmet

  // 5. /public folder
  return (
    <>
      <Helmet>
        <title>Lt Clone</title>
        <meta name="Lt Clone" content="Lt Clone" />
      </Helmet>
      <Auth>
        <Theme>
          <Routes />
        </Theme>
      </Auth>
    </>
  )
}

// Testing out styled components / css
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const BlueContainer = styled.div`
  background: ${(props) => props.theme.colors.aliceBlue};
  height: 100px;
  width: 100;
`

export default App
