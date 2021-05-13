import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Loading from '../components/Loading'

// TODO can add to root as footer
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Linktree-mock
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 350,
    height: 400,
  },
  // TODO: mobile
  innerRoot: {
    maxWidth: 275,
    height: 50,
    background: '#0073e6',
    color: 'white',
    margin: 'auto',
    textAlign: 'center',
    cursor: 'pointer',
  },
  title: {
    textAlign: 'center',
  },
})

// TODO change query / resolver names
const GET_USER_URLS = gql`
  query getUser($username: String!) {
    getUser(username: $username) {
      username
      links {
        description
        url
      }
    }
  }
`

function Client() {
  // TODO username as /:id param
  const { loading, error, data } = useQuery(GET_USER_URLS, {
    variables: {
      username: 'ronmaple',
    },
  })

  if (error) {
    // todo handle error
    console.error(error)
    return <div>Error!</div>
  }
  const classes = useStyles()

  const UserLink = ({ description, url }, key) => (
    <Card
      className={classes.innerRoot}
      onClick={() => {
        window.location = `https://${url}`
        return null
      }}
      key={key}
    >
      <CardContent>
        <Typography variant="h5" component="h2">
          {description || url}
        </Typography>
      </CardContent>
    </Card>
  )
  return (
    <FlexContainer>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            {loading ? 'Fetching user...' : data.getUser.username}
          </Typography>
        </CardContent>
        <LinkContainer>
          {loading ? <Loading /> : data.getUser.links.map(UserLink)}
        </LinkContainer>
      </Card>
    </FlexContainer>
  )
}

const FlexContainer = styled.div`
  display: flex;
  background: #e6f3ff;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100wh;
`

const LinkContainer = styled.div`
  max-height: 90%;
  margin: auto;
  > div {
    margin: 0.25em auto;
  }
`

export default Client
