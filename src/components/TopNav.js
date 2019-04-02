// src/components/MainNavigation.js

import React, { useContext } from 'react'
import { NavLink, Redirect } from 'react-router-dom'

import Context from '../globalState/Context'

import './TopNav.css'
import { Auth } from 'aws-amplify';

function TopNav (props) {
  // console.log('>>>-TopNav-props->', props)
  const { state, dispatch } = useContext( Context )
  console.log('>>>-TopNav-state->', state)
  // console.log('>>>-TopNav-state.user->', state.user)
  console.log('>>>-TopNav-state.userIsknown->', state.userIsknown)
  console.log('>>>-TopNav-state.userIsAuthenticated->', state.userIsAuthenticated)
  console.log('>>>-TopNav-state.userForgotPassword->', state.userForgotPassword)   

  const handleSignOut = async (event) => {
    await Auth.signOut()
    dispatch({ type: 'USER_SIGN_OUT', payload: null })
    // console.log('>>>-TopNav-handleSignOut-userIsAuthenticated->',userIsAuthenticated)
    // set user auth state to false
    return (<Redirect to='/' />)
  }

  return (
    <header className='main-navigation'>
      <nav>
        <span className='main-navigation-title'>Auth Module - 100</span>

          { (state.userIsAuthenticated) && (
            <ul>
              <span>
                Hello {state.user.firstName} {state.user.lastName}!
              </span>
              <li>
                <NavLink 
                to='/dashboard' 
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}>Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to='/account' activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}>Account</NavLink>
              </li>
              <li>
                <NavLink to='/' onClick={handleSignOut} >Sign Out</NavLink>
              </li>
            </ul>
          ) }
          
          {!state.userIsAuthenticated && (
            <ul>
              <li>
                <NavLink to='/'>Splash</NavLink>
              </li>
              <li>
                <NavLink to='/signin' activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}>Sign In</NavLink>
              </li>
              <li>
                <NavLink to='/signup' activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}>Sign Up</NavLink>
              </li>
            </ul>
          ) }
      </nav>
    </header>
  )
}

export default TopNav
