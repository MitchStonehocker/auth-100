// src/globalState/initialState.js

const initialState = {
  user: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      sex: '',
      race: '',
      birthdate: ''
  },
  session: null,
  userIsknown: false,
  userIsAuthenticated: false,  
  userForgotPassword: false,
  userChangeEmail: false,
  products: [
    { id: 'p1', title: 'Gaming Mouse (with AI)', price: 29.99, inStock: 10 },
    { id: 'p2', title: 'Harry Potter wand', price: 9.99, inStock: 10 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99, inStock: 10 },
    { id: 'p4', title: 'Dehydrated plant', price: 2.99, inStock: 10 }
  ],
  services: [
    { id: 's1-1', title: 'Service 1: month to month', price: 29.99 },
    { id: 's1-2', title: 'Service 1: 1 year, monthly payment', price: 19.99 },
    { id: 's1-3', title: 'Service 1: 1 year, annual payment', price: 9.99 },
    { id: 's2-1', title: 'Service 2: month to month', price: 59.99 },
    { id: 's2-2', title: 'Service 2: 1 year, monthly payment', price: 49.99 },
    { id: 's2-3', title: 'Service 2: 1 year, annual payment', price: 39.99 }
  ],
  cartItems: []
}

export default initialState
