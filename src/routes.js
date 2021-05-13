import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

import { isLoggedIn } from './utils/auth'
import Home from './home'
import Dashboard from './app/Dashboard'
import Client from './client'
import Login from './registration/Login'
import Callback from './components/Callback'
// import TopBar from './components/TopBar'
import DashboardLayout from './components/Layout'

// TODO: code split
const Routes = () => {
  // TODO 404
  // TODO: switch to /client/:id
  console.log('isLoggedIn', isLoggedIn())
  const PublicRoutes = () => (
    <Router>
      <Switch>
        <Route exact path="/client">
          <Client />
        </Route>
        <DashboardLayout>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </DashboardLayout>
      </Switch>
    </Router>
  )
  const PrivateRoutes = () => (
    <Router>
      <Switch>
        <DashboardLayout>
          <Route
            exact
            path="/"
            render={(props) => <Redirect to="/app" />}
          />
          <Route exact path="/app">
            <Dashboard />
          </Route>
        </DashboardLayout>
      </Switch>
    </Router>
  )
  return <>{isLoggedIn() ? <PrivateRoutes /> : <PublicRoutes />}</>
}

export default Routes
