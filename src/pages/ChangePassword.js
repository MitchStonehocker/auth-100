// src/pages/ ChangePassword.js

import React, { useContext } from 'react'
import Context from '../globalState/Context'
import TopNav from '../components/TopNav'
import useForm from '../hooks/useForm'
import validate from '../utilities/FormValidations'

import './ChangePassword.css'

const ChangePassword = (props) => {
  console.log('>>>-ChangePassword-props->', props)
  const { state, dispatch } = useContext( Context )
  console.log('>>>-ChangePassword-state->', state)
  console.log('>>>-ChangePassword-state.userIsknown->', state.userIsknown)
  console.log('>>>-ChangePassword-state.isAuthenticated->', state.userIsAuthenticated)
  console.log('>>>-ChangePassword-state.userForgotPassword->', state.userForgotPassword)  
  console.log('>>>-ChangePassword-state.userChangePassword->', state.userChangePassword)  

  const { 
    values, 
    errors, 
    handleChange, 
    isSubmitting, 
    handleChangePassword
  } = useForm(
    changePassword,// callback
    validate,
    props,
    dispatch
  )

  function changePassword () {
    console.log('>>>-ChangePassword-changePassword-values->',values)
  }

    
  return (
    <React.Fragment>
      <TopNav />
      <div className='section is-fullheight'>
        <div className='container'>
          <div className='column is-4 is-offset-4'>
            <div className='box'>
              <form onSubmit={handleChangePassword} noValidate>
                {/* Old Password */}
                <div className='field'>
                  <label className='label'>Old Password</label>
                  <div className='control'>
                    <input
                      className={`input ${errors.password && 'is-danger'}`}
                      type='password'
                      name='oldPassword'
                      onChange={handleChange}
                      value={values.oldPassword || ''}
                      required
                    />
                  </div>
                  {errors.password && (
                    <p className='help is-danger'>{errors.password}</p>
                  )}
                </div>
                {/* Password */}
                <div className='field'>
                  <label className='label'>New Password</label>
                  <div className='control'>
                    <input
                      className={`input ${errors.password && 'is-danger'}`}
                      type='password'
                      name='newPassword'
                      onChange={handleChange}
                      value={values.newPassword || ''}
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

export default ChangePassword