// src/pages/SignIn.js

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Context from '../globalState/Context'
import TopNav from '../components/TopNav'
import useForm from '../hooks/useForm'
import validate from '../utilities/FormValidations'

import './SignIn.css'

const SignIn = (props) => {
  console.log('>>>-SignIn-props->', props)
  const { state, dispatch } = useContext( Context )
  console.log('>>>-SignIn-state->', state)
  console.log('>>>-SignIn-state.userIsknown->', state.userIsknown)
  console.log('>>>-SignIn-state.userIsAuthenticated->', state.userIsAuthenticated)
  console.log('>>>-SignIn-state.userForgotPassword->', state.userForgotPassword)

  const { 
    values, 
    errors, 
    handleChange, 
    isSubmitting, 
    handleSignIn 
  } = useForm(
    signin,// callback
    validate,
    props,
    dispatch
  )

  function signin () {
    console.log('>>>-SignIn-signin-values->',values)
  }

  return (
    <React.Fragment>
      <TopNav />
      <div className='section is-fullheight'>
        <div className='container'>
          <div className='column is-4 is-offset-4'>
            <div className='box'>
              <form onSubmit={handleSignIn} noValidate>
                {/* Email */}
                <div className='field'>
                  <label className='label'>Email Address</label>
                  <div className='control'>
                    <input
                      className={`input ${errors.email && 'is-danger'}`}
                      autoComplete='on'
                      type='email'
                      name='email'
                      onChange={handleChange}
                      value={values.email || ''}
                      required
                    />
                    {errors.email && (
                      <p className='help is-danger'>{errors.email}</p>
                    )}
                  </div>
                </div>
                {/* Password */}
                <div className='field'>
                  <label className='label'>Password</label>
                  <div className='control'>
                    <input
                      className={`input ${errors.password && 'is-danger'}`}
                      autoComplete='off'
                      type='password'
                      name='password'
                      onChange={handleChange}
                      value={values.password || ''}
                      required
                    />
                  </div>
                  {errors.password && (
                    <p className='help is-danger'>{errors.password}</p>
                  )}
                </div>
                {/* Submit */}
                <button
                  type='submit'
                  className='button is-block is-info is-fullwidth'
                >
                   {isSubmitting ? 'Signing In...' : 'Sign In'}
                </button>
                {/* Forgot Email */}
                <br />
                <Link to='/signin/forgot'>Forgot password! Send Email.</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SignIn
