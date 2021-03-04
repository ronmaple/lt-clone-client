import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'

function Auth({ children }) {
  return (
    <Auth0Provider
      domain={process.env.AUTH0_CLIENT_DOMAIN}
      clientId={process.env.AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth
