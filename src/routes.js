import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

import Home from './home'
import Dashboard from './app/Dashboard'
import Client from './client'
import Login from './registration/login'
// import TopBar from './components/TopBar'
import DashboardLayout from './components/DashboardLayout'
// TODO: code split
function Routes() {
  const isLoggedIn = null // check localstorage

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => {
            if (isLoggedIn) {
              return <Dashboard {...props} />
            }
            return <Login {...props} />
          }}
        />

        {/* <Route exact path="/app/dashboard">
          <Dashboard />
        </Route> */}
        {/* Should be under different routing, but keep for now */}
        <Route exact path="/client">
          <Client />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <DashboardLayout>App</DashboardLayout>
      </Switch>
    </Router>
  )
}

export default Routes
