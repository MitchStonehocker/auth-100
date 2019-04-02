// src/pages/Splash.js

import React, { useContext }  from 'react'

import Context from '../globalState/Context'

import TopNav from '../components/TopNav'
import './Splash.css'

const Splash = props => {
  console.log('>>>-Splash-props->', props)
  const { state } = useContext( Context )
  // console.log('>>>-Splash-state->', state)
  console.log('>>>-Splash-state.user.session->', state.user.session)

  return (
    <React.Fragment>
      <TopNav />
      <div className='splash'>
        <div>
          <strong>Splash page!</strong>
          <br />
          <p>This is the public landing page.</p>
          <p>Splash, Sign In and Sign Up pages are available.</p>
          <p>Sign Up, Confirm, then Sign In to access authorized user resources.</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Splash
