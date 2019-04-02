// src/hooks/useForm.js

import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'

const useForm = (callback, validate, props, dispatch) => {
    // console.log('>>>-useForm-callback->', callback)
  // console.log('>>>-useForm-props->', props)
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback()
      }
    },
    [errors]
  )

// handleChange
  const handleChange = event => {
    event.persist()
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  }

  // ============================================
// handleSignIn
const handleSignIn = async (event) => {
  if (event) event.preventDefault()
  // const { state, dispatch } = useContext( Context )
  console.log('>>>-useForm-handleSignIn-values->', values)
  setErrors(validate(values))
  setIsSubmitting( true )
  
  try {
      const user = await Auth.signIn(values.email, values.password)
      dispatch({ type: 'USER_SIGN_IN', payload: user })
      setIsSubmitting( false )

      props.history.push('/dashboard')
  } 
  catch (err) {
    alert(err.message)
    setIsSubmitting( false )
  } 
}

// ============================================
// handleSignUp
  const handleSignUp = async event => {
    if (event) event.preventDefault()
    console.log('>>>-SignUp-useForm-handleSignUp-values->', values)
    setErrors(validate(values))
    setIsSubmitting(true)

    try {
      const user = await Auth.signUp( 
        {
          username: values.email,
          password: values.password,
          attributes: {
            email: values.email
          }
        }
       )
      dispatch({ type: 'USER_SIGN_UP', payload: user })
      setIsSubmitting( false )
    } 
    catch(err) {
      console.log('error signing in! :', err)
      alert(err.message)
      setIsSubmitting( false )
    }
  }

// handleSignUpConfirm
  const handleSignUpConfirm = async (event) => {
    if (event) event.preventDefault()
    console.log('>>>-SignUp-useForm-handleSignUpConfirm-values->', values)
    // let the auth provider check errors
    // setErrors(validate(values))
    setIsSubmitting(true)
  
    try {
      await Auth.confirmSignUp(values.email, values.confirmCode)
      const user = await Auth.signIn(values.email, values.password)
      dispatch({ type: 'USER_SIGN_UP_CONFIRM', payload: user })
      setIsSubmitting( false )
      props.history.push('/dashboard')
    }
    catch (err) {
      alert(err.message)
      console.log('error signing in! :', err)
      setIsSubmitting( false )
    } 
   }

// ============================================
// handleForgotPassword
const handleForgotPassword = async event => {
  if (event) event.preventDefault()
  console.log('>>>-ForgotPassword-useForm-handleForgotPassword-values->', values)
  setErrors(validate(values))
  setIsSubmitting(true)

  try {
    const user = await Auth.forgotPassword( values.email )
    console.log('>>>-ForgotPassword-useForm-handleForgotPassword-user->', user)
    dispatch({ type: 'USER_FORGOT_PASSWORD', payload: user })
    setIsSubmitting( false )
  } 
  catch(err) {
    console.log('error resetting forgotten password! :', err)
    alert(err.message)
    setIsSubmitting( false )
  }
}

// handleForgotPasswordConfirm
const handleForgotPasswordConfirm = async event => {
  if (event) event.preventDefault()
  console.log('>>>-ForgotPassword-useForm-handleForgotPasswordConfirm-values->', values)
  setErrors(validate(values))
  setIsSubmitting(true)

  try {
    const user = await Auth.forgotPasswordSubmit(
      values.email,
      values.confirmCode,
      values.password
    )
    dispatch({ type: 'USER_FORGOT_PASSWORD_CONFIRM', payload: user })
    setIsSubmitting( false )
    props.history.push('/dashboard')
  } 
  catch(err) {
    console.log('error resetting forgotten password! :', err)
    alert(err.message)
    setIsSubmitting( false )
  }
}

// ============================================
// handleChangePassword
const handleChangePassword = async event => {
  if (event) event.preventDefault()
  console.log('>>>-ChangeEmail-useForm-handleChangePassword-values->', values)
  setErrors(validate(values))
  setIsSubmitting(true)

  try {
    const user = await Auth.currentAuthenticatedUser()
    const change = await Auth.changePassword( 
      user,
      values.oldPassword,
      values.newPassword
      )
    console.log('>>>-ChangeEmail-useForm-handleForgotPassword-user->', user)
    console.log('>>>-ChangeEmail-useForm-handleForgotPassword-change->', change)
    dispatch({ type: 'USER_CHANGE_PASSWORD', payload: user })
    setIsSubmitting( false )
    props.history.push('/account')
  } 
  catch(err) {
    console.log('error changing password! :', err)
    alert(err.message)
    setIsSubmitting( false )
  }
}



// ============================================
  return {
    errors,
    values,
    isSubmitting,
    handleChange,
    handleSignIn,
    handleSignUp,
    handleSignUpConfirm,
    handleForgotPassword,
    handleForgotPasswordConfirm,
    handleChangePassword
    // handleChangeEmail,
    // handleChangeEmailConfirm
  }
}

export default useForm


// Work to do
// ============================================
// handleChangeEmail
// const handleChangeEmail = async event => {
//   if (event) event.preventDefault()
//   console.log('>>>-ChangeEmail-useForm-handleChangeEmail-values->', values)
//   setErrors(validate(values))
//   setIsSubmitting(true)

//   try {
//     const user = await Auth.currentAuthenticatedUser()
//     const change = await Auth.updateUserAttributes(
//       user,
//       { email: values.emailNew }
//     )
//     console.log('>>>-ChangeEmail-useForm-handleChangeEmail-user->', user)
//     console.log('>>>-ChangeEmail-useForm-handleChangeEmail-change->', change)
//     dispatch({ type: 'USER_CHANGE_EMAIL', payload: user })
//     setIsSubmitting( false )
//   } 
//   catch(err) {
//     console.log('error resetting forgotten password! :', err)
//     alert(err.message)
//     setIsSubmitting( false )
//   }
// }

// handleChangeEmailConfirm
// const handleChangeEmailConfirm = async event => {
//   if (event) event.preventDefault()
//   console.log('>>>-ChangeEmail-useForm-handleChangeEmailConfirm-values->', values)
//   setErrors(validate(values))
//   setIsSubmitting(true)

//   try {
//     await Auth.verifyCurrentUserAttributeSubmit(
//       values.email,
//       values.confirmCode
//     )
//     dispatch({ type: 'USER_CHANGE_EMAIL_CONFIRM', payload: {} })
//     setIsSubmitting( false )
//     props.history.push('/account')
//   } 
//   catch(err) {
//     console.log('error resetting forgotten password! :', err)
//     alert(err.message)
//     setIsSubmitting( false )
//   }
// }