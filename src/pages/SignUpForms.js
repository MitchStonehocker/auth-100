// src/pages/SignUp.js

import React, { useContext } from 'react'
import Context from '../globalState/Context'
import TopNav from '../components/TopNav'
import useForm from '../hooks/useForm'
import validate from '../utilities/FormValidations'

import './SignUp.css'

export const SignUpForm = ({props}) => {
  console.log('>>>-SignUpForm-props->', props)
  const { state, dispatch } = useContext( Context )
  console.log('>>>-SignUpForm-state->', state)
  console.log('>>>-SignUpForm-state.isNewUser->', state.isNewUser)
  console.log('>>>-SignUpForm-state.isAuthenticated->', state.isAuthenticated)

  const { 
    values,
    errors, 
    handleChange, 
    isSubmitting, 
    handleSignUp,
    handleSignUpConfirm
  } = useForm(
    signup,
    validate,
    props,
    dispatch
  )

  function signup () {
    console.log('>>>-SignUpForm-signup-values->',values)
  }

    return (
      <React.Fragment>
        <TopNav />
        <div className='section is-fullheight'>
          <div className='container'>
            <div className='column is-4 is-offset-4'>
              <div className='box'>
                <form onSubmit={handleSignUp} noValidate>
                  {/* First Name */}
                  <div className='field'>
                    <label className='label'>First Name</label>
                    <div className='control'>
                      <input
                        autoComplete='off'
                        className={`input ${errors.firstName && 'is-danger'}`}
                        type='text'
                        name='firstName'
                        onChange={handleChange}
                        value={values.firstName || ''}
                        required
                      />
                      {errors.firstName && (
                        <p className='help is-danger'>{errors.firstName}</p>
                      )}
                    </div>
                  </div>
                  {/* Last Name */}
                  <div className='field'>
                    <label className='label'>Last Name</label>
                    <div className='control'>
                      <input
                        autoComplete='off'
                        className={`input ${errors.lastName && 'is-danger'}`}
                        type='text'
                        name='lastName'
                        onChange={handleChange}
                        value={values.lastName || ''}
                        required
                      />
                      {errors.lastName && (
                        <p className='help is-danger'>{errors.lastName}</p>
                      )}
                    </div>
                  </div>
                  {/* Email */}
                  <div className='field'>
                    <label className='label'>Email Address</label>
                    <div className='control'>
                      <input
                        autoComplete='off'
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
                  {/* Email confirm */}
                  <div className='field'>
                    <label className='label'>Confirm Email Address</label>
                    <div className='control'>
                      <input
                        autoComplete='off'
                        className={`input ${errors.emailConfirm && 'is-danger'}`}
                        type='email'
                        name='emailConfirm'
                        onChange={handleChange}
                        value={values.emailConfirm || ''}
                        required
                      />
                      {errors.emailConfirm && (
                        <p className='help is-danger'>{errors.emailConfirm}</p>
                      )}
                    </div>
                  </div>
                  {/* Phone number */}
                  <div className='field'>
                    <label className='label'>Phone Number</label>
                    <div className='control'>
                      <input
                        autoComplete='off'
                        className={`input ${errors.phone && 'is-danger'}`}
                        type='tel'
                        name='phone'
                        onChange={handleChange}
                        value={values.phone || ''}
                        required
                      />
                      {errors.phone && (
                        <p className='help is-danger'>{errors.phone}</p>
                      )}
                    </div>
                  </div>
                  {/* Password */}
                  <div className='field'>
                    <label className='label'>Password</label>
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
                    <label className='label'>Confirm Password</label>
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
                    {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
}

export const SignUpConfirmForm = ({props}) => {
  console.log('>>>-SignUpConfirmForm-props->', props)
  const { state, dispatch } = useContext( Context )
  console.log('>>>-SignUpConfirmForm-state->', state)
  console.log('>>>-SignUpConfirmForm-state.isNewUser->', state.isNewUser)
  console.log('>>>-SignUpConfirmForm-state.isAuthenticated->', state.isAuthenticated)

  const { 
    values,
    errors, 
    handleChange, 
    isSubmitting, 
    handleSignUpConfirm 
  } = useForm(
    signupconfirm,
    validate,
    props,
    dispatch
  )

  function signupconfirm () {
    console.log('>>>-SignUpConfirmForm-signupconfirm-values->',values)
  }

    return (
      <React.Fragment>
        <TopNav />
        <div className='section is-fullheight'>
          <div className='container'>
            <div className='column is-4 is-offset-4'>
              <div className='box'>
                <form onSubmit={handleSignUpConfirm} noValidate>

                  {/* Confirmation code */}
                  <div className='field'>
                    <label className='label'>Confirmation Code</label>
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
                 
                  {/* Submit */}
                  <button
                    type='submit'
                    className='button is-block is-info is-fullwidth'
                  >
                    {isSubmitting ? 'Confirming Code...' : 'Confirm'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
}

