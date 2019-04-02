// src/utilities/FormValidations.js

import { validations } from './validations'

export default function validate (values) {
  let errors = {}

  if (!values.firstName) {
    errors.firstName = 'Fisrt name address is required.'
  } else if (!validations.ANYTHING.test(values.firstName)) {
    errors.firstName = 'First name is required.'
  }

  if (!values.lastName) {
    errors.lastName = 'Last name address is required.'
  } else if (!validations.ANYTHING.test(values.lastName)) {
    errors.lastName = 'Last name is required.'
  }

  if (!values.email) {
    errors.email = 'Email address is required'
  } else if (!validations.EMAIL.test(values.email)) {
    errors.email = 'Valid email is required.'
  }

  if (!values.emailConfirm) {
    errors.emailConfirm = 'Confirm email address is required.'
  } else if (!validations.EMAIL.test(values.emailConfirm)) {
    errors.emailConfirm = 'Valid email is required.'
  }

  if (!values.emailNew) {
    errors.emailNew = 'Email address is required'
  } else if (!validations.EMAIL.test(values.emailNew)) {
    errors.emailNew = 'Valid email is required.'
  }

  if (!values.phone) {
    errors.phone = 'Phone address is required.'
  } else if (validations.PHONE_USA.test(values.phone)) {
    errors.phone = 'Valid phone is 1-222-333-4444 or 12223334444.'
  }
  //   else if (validations.PHONE_1_DASH.test(values.phone)) {
  //     errors.phone = 'Valid phone is required.'
  //   }
  //    else if (validations.PHONE_P1P_DASH.test(values.phone)) {
  //     errors.phone = 'Valid phone is required.'
  //   }

  if (!values.password) {
    errors.password = 'Password is required.'
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters.'
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Comfirm password is required'
  } else if (values.passwordConfirm.length < 8) {
    errors.passwordConfirm = 'Password must be 8 or more characters.'
  }

  return errors
}
