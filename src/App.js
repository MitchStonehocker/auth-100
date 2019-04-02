import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom'

import Context from './globalState/Context'
import PrivateRoute from './globalState/PrivateRoute'

import Splash from './pages/Splash'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ForgotPassword from './pages/ForgotPassword'
import ChangePassword from './pages/ChangePassword'
// import ChangeEmail from './pages/ChangeEmail'
import NotFound from './pages/NotFound'

import './App.css'

function App () {
  const { state } = useContext( Context )
  // console.log('>>>-App-state->', state)
  console.log('>>>-App-state.userIsknown->', state.userIsknown)
  console.log('>>>-App-state.userIsAuthenticated->', state.userIsAuthenticated)
  console.log('>>>-App-state.userForgotPassword->', state.userForgotPassword)   

  return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signin/forgot' component={ForgotPassword} />
            <Route exact path='/signup' component={SignUp} />

            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/account' component={Account} />
            <PrivateRoute exact path='/change-password' component={ChangePassword} />
            {/* <PrivateRoute exact path='/change-email' component={ChangeEmail} /> */}
            <Route exact path='/' component={Splash} />
            <Route path='/not-found' component={NotFound} />
            {/* everything else goes to Splash */}
            <Route render={function () {
              return  <Redirect to='/' />
            }} />
          </Switch>
          <footer className='App-footer'>footer</footer>
        </div>
      </BrowserRouter>
  )
}

export default withRouter(App)
