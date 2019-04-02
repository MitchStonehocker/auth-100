// src/pages/ ChangeEmail.js

import React, { useContext } from 'react'
import Context from '../globalState/Context'
import TopNav from '../components/TopNav'
import useForm from '../hooks/useForm'
import validate from '../utilities/FormValidations'

import './ChangeEmail.css'

const ChangeEmail = (props) => {
    console.log('>>>-ChangeEmail-props->', props)
    const { state, dispatch } = useContext( Context )
    console.log('>>>-ChangeEmail-state->', state)
    console.log('>>>-ChangeEmail-state.userIsknown->', state.userIsknown)
    console.log('>>>-ChangeEmail-state.userIsAuthenticated->', state.userIsAuthenticated)
    console.log('>>>-ChangeEmail-state.userChangeEmail->', state.userChangeEmail)


    const { 
      values,
      errors, 
      handleChange, 
      isSubmitting, 
      handleChangeEmail, 
      handleChangeEmailConfirm 
    } = useForm(
      changeEmail,// callback
      validate,
      props,
      dispatch
    )
  
    function changeEmail () {
      console.log('>>>-ChangeEmail-changeEmail-values->',values)
    }

    const ChangeEmailForm = () => {
        return (
            <React.Fragment>
              <TopNav />
              <div className='section is-fullheight'>
                <div className='container'>
                  <div className='column is-4 is-offset-4'>
                    <div className='box'>
                      <form onSubmit={handleChangeEmail} noValidate>
                        {/* New Email */}
                        <div className='field'>
                          <label className='label'>New Email Address</label>
                          <div className='control'>
                            <input
                              autoComplete='on'
                              className={`input ${errors.emailNew && 'is-danger'}`}
                              type='email'
                              name='emailNew'
                              onChange={handleChange}
                              value={values.emailNew || ''}
                              required
                            />
                            {errors.emailNew && (
                              <p className='help is-danger'>{errors.emailNew}</p>
                            )}
                          </div>
                        </div>
                        {/* Email confirm */}
                        <div className='field'>
                          <label className='label'>Confirm New Email Address</label>
                          <div className='control'>
                            <input
                              autoComplete='on'
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

                        {/* Submit */}
                        <button
                          type='submit'
                          className='button is-block is-info is-fullwidth'
                        >
                          {isSubmitting ? 'Changing Email...' : 'Change Email'}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
    }

    const ChangeEmailConfirmForm = () => {
        return (
            <React.Fragment>
              <TopNav />
              <div className='section is-fullheight'>
                <div className='container'>
                  <div className='column is-4 is-offset-4'>
                    <div className='box'>
                      <form onSubmit={handleChangeEmailConfirm} noValidate>
      
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

  return (
    <div className='ChangeEmail'>
      {
        !state.userChangeEmail ? ChangeEmailForm() : ChangeEmailConfirmForm()
      }
    </div>
  )
}

export default ChangeEmail