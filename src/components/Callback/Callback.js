import React, { useEffect } from 'react'
import { withRouter, withHistory } from 'react-router-dom'
import styled from 'styled-components'

import auth from '../../utils/auth'
import Loading from '../Loading'

const Callback = () => {
  const history = useHistory()
  useEffect(async () => {
    // await auth.handleAuthentication()
    history.replace('/')
  }, [])

  return <Loading />
}

export default withRouter(Callback)
