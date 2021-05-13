import Auth from 'auth0-js'

const ACCESS_TOKEN = 'access_token'
const ID_TOKEN = 'id_token'

const auth0 = new Auth.WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  audience: process.env.AUTH0_AUDIENCE,
  // redirectUri: 'http://localhost:8080/callback', // Not needed right now. TODO: custom redirect on logins.
  responseType: 'token id_token',
  scope:
    'read:current_user update:current_user_metadata app_metadata',
})

// https://github.com/auth0/auth0.js#clientloginoptions-callback
export const login = async (username, password) => {
  try {
    const result = await auth0.client.login(
      {
        realm: 'Username-Password-Authentication',
        username,
        password,
      },
      async (err, authResult) => {
        if (err) {
          console.error('error in login', err)
          throw err
        }

        const { accessToken, idToken } = authResult
        setAccessToken(accessToken)
        setIdToken(idToken)
        return authResult
      },
    )
  } catch (e) {
    console.error(e)
  }
}

export const setAccessToken = (accessToken) =>
  localStorage.setItem(ACCESS_TOKEN, accessToken)
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN)
export const removeAccessToken = () =>
  localStorage.removeItem(ACCESS_TOKEN)

export const setIdToken = (idToken) =>
  localStorage.setItem(ID_TOKEN, idToken)
export const getIdToken = () => localStorage.getItem(ID_TOKEN)
export const removeIdToken = () => localStorage.removeItem(ID_TOKEN)

export const isLoggedIn = () => {
  console.log('getIdToken', getIdToken())
  return !!getIdToken()
}

// TODO: refresh tokens, resets, etc. Unnecessary for this project.

//auth0.com/docs/libraries/auth0js#extract-the-authresult-and-get-user-info
// Probably not needed since I'm not redirecting to callback.
export const handleAuthentication = async () => {
  try {
    const { accessToken, idToken } = await auth0.parseHash({
      hash: window.location.hash,
    })

    if (!accessToken || !idToken) {
      console.error('Failed to authenticate') // do something better
    }
    setAccessToken(accessToken)
    setIdToken(idToken)
    return user
  } catch (e) {
    console.error('error', e)
    throw new Error('Some error message...')
  }
}

export default {}
