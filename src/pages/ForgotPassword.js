// src/pages/ ForgotPassword.js

import React, { useContext } from 'react'
import Context from '../globalState/Context'
import TopNav from '../components/TopNav'
import useForm from '../hooks/useForm'
import validate from '../utilities/FormValidations'

import './ForgotPassword.css'

const ForgotPassword = (props) => {
  console.log('>>>-ForgotPassword-props->', props)
  const { state, dispatch } = useContext( Context )
  console.log('>>>-ForgotPassword-state->', state)
  console.log('>>>-ForgotPassword-state.userIsknown->', state.userIsknown)
  console.log('>>>-ForgotPassword-state.isAuthenticated->', state.userIsAuthenticated)
  console.log('>>>-ForgotPassword-state.userForgotPassword->', state.userForgotPassword)  

  const { 
    values, 
    errors, 
    handleChange, 
    isSubmitting, 
    handleForgotPassword,
    handleForgotPasswordConfirm
  } = useForm(
    forgotPassword,// callback
    validate,
    props,
    dispatch
  )

  function forgotPassword () {
    console.log('>>>-ForgotPassword-forgotPassword-values->',values)
  }

  const ForgotPasswordForm = () => {
    return (
        <React.Fragment>
        <TopNav />
        <div className='section is-fullheight'>
          <div className='container'>
            <div className='column is-4 is-offset-4'>
              <div className='box'>
                <form onSubmit={handleForgotPassword} noValidate>

                  {/* Email */}
                  <div className='field'>
                    <label className='label'>Forgot Password?</label>
                    <p>Enter your email.</p>
                    <div className='control'>
                      <input
                        autoComplete='on'
                        className={`input ${errors.email && 'is-danger'}`}
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
                 
                  {/* Submit */}
                  <button
                    type='submit'
                    className='button is-block is-info is-fullwidth'
                  >
                     {isSubmitting ? 'Sending password reset request...' : 'Reset Password'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  const ForgotPasswordConfirmForm = () => {
      return (
        <React.Fragment>
        <TopNav />
        <div className='section is-fullheight'>
          <div className='container'>
            <div className='column is-4 is-offset-4'>
              <div className='box'>
                <form onSubmit={handleForgotPasswordConfirm} noValidate>

                  {/* Confirmation code */}
                  <div className='field'>
                    <label className='label'>Forgot Password?</label>
                    <p>Check your email, enter password reset confirmation code.</p>
                    <div className='control'>
                    <input
                        autoComplete='off'
                        className={`input ${errors.confirmCode && 'is-danger'}`}
                        type='tel'
                        name='confirmCode'
                        onChange={handleChange}
                        value={values.confirmCode || ''}
                        required
                      />
                      {errors.confirmCode && (
                        <p className='help is-danger'>{errors.confirmCode}</p>
                      )}
                    </div>
                  </div>
                 
                 {/* Password */}
                 <div className='field'>
                    <label className='label'>New Password</label>
                    <div className='control'>
                      <input
                        className={`input ${errors.password && 'is-danger'}`}
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
                  {/* Password confirm */}
                  <div className='field'>
                    <label className='label'>Confirm New Password</label>
                    <div className='control'>
                      <input
                        className={`input ${errors.passwordConfirm &&
                          'is-danger'}`}
                        type='password'
                        name='passwordConfirm'
                        onChange={handleChange}
                        value={values.passwordConfirm || ''}
                        required
                      />
                    </div>
                    {errors.passwordConfirm && (
                      <p className='help is-danger'>{errors.passwordConfirm}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type='submit'
                    className='button is-block is-info is-fullwidth'
                  >
                     {isSubmitting ? 'Sending password change request...' : 'Set New Password'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  return (
    <div className='SignUp'>
      {
        !state.userForgotPassword ? ForgotPasswordForm() : ForgotPasswordConfirmForm()
      }
    </div>
  )
}

export default ForgotPassword