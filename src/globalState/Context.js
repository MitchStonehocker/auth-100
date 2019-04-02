// src/globalState/Context.js

import React from 'react'
import initialState from './initialState'

export default React.createContext({
  user: initialState.user,
  session: initialState.session,
  userIsknown: initialState.userIsknown,
  userIsAuthenticated: initialState.userIsAuthenticated,
  userForgotPassword: initialState.userForgotPassword,
  userChangeEmail: initialState.userChangeEmail,
  products: initialState.products,
  services: initialState.services,
  cart: initialState.cart,

  addToCart: item => {},
  removeFromCart: itemId => {}
})
