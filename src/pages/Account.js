// src/pages/Account.js

import React from 'react'
import { NavLink } from 'react-router-dom'
import TopNav from '../components/TopNav'
import './Account.css'

const Account = props => {
  console.log('>>>-Account-props->', props)

  return (
    <React.Fragment>
      <TopNav />
      <div className='account'>
      <ul>
      <strong>Account page </strong>
        <li>
        <p>items purchased</p>
        </li>
        <li>
        <p>days to re-up subscriptions</p>
        </li>
        <li>
        <p>add more user details</p>
        </li>
        <li>
        <p>defaults & preferences</p>
        </li>
        {/* <li>
          <NavLink 
          to='/change-email' 
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}>Change Email
          </NavLink>
        </li> */}
        <li>
          <NavLink to='/change-password' activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}>Change Password
          </NavLink>
        </li>
        <li>
        <p>change phone number</p>
        </li>
      </ul>
      </div>
    </React.Fragment>
  )
}

export default Account
