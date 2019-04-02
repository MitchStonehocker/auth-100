// src/pages/Dashboard.js

import React from 'react'
import TopNav from '../components/TopNav'
import './Dashboard.css'

const Dashboard = props => {
  console.log('>>>-Dashboard-props->', props)

  return (
    <React.Fragment>
      <TopNav />
      <div className='dashboard'>
        <strong>Dashboard page </strong>
        <ol>
        <p>Test account management methods:</p>
        <li><p>change email</p></li>
        <li><p>change password</p></li>
      </ol>
        

      </div>
    </React.Fragment>
  )
}

export default Dashboard
