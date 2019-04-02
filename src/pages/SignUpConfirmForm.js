// src/pages/SignUp.js

import React, { useContext } from 'react'
import Context from '../globalState/Context'
import TopNav from '../components/TopNav'
import useForm from '../hooks/useForm'
import validate from '../utilities/FormValidations'

import './SignUp.css'

function SignUpConfirmForm({props}) {
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

export default SignUpConfirmForm
