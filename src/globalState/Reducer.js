// src/globalState/Reducer.js

export default function Reducer (state, { type, payload }) {
    console.log('>>>-Reducer-state->', state)
    console.log('>>>-Reducer-type->', type)
    console.log('>>>-Reducer-payload->', payload)
    switch (type) {
        case 'USER_SIGN_IN':
            return { 
                ...state, 
                session: payload, 
                userIsknown: true,
                userIsAuthenticated: true
            }
        case 'USER_SIGN_UP':
            return { 
                ...state, 
                session: payload, 
                userIsknown: true,
                userIsAuthenticated: false
            }
        case 'USER_SIGN_UP_CONFIRM':
            return { 
                ...state, 
                session: payload,
                userIsknown: true,
                userIsAuthenticated: true
            }
        case 'USER_SIGN_OUT':
            return {
                ...state, 
                session: payload, 
                userIsknown: false,
                userIsAuthenticated: false
            }
        case 'USER_FORGOT_PASSWORD':
            return { 
                ...state, 
                session: payload,
                userForgotPassword: true,
                userIsAuthenticated: false
            }
        case 'USER_FORGOT_PASSWORD_CONFIRM':
            return { 
                ...state, 
                session: payload,
                userForgotPassword: false,
                userIsAuthenticated: true
            }
        case 'USER_CHANGE_EMAIL':
            return { 
                ...state, 
                session: payload,
                userChangeEmail: true
            }
        case 'USER_CHANGE_EMAIL_CONFIRM':
            return { 
                ...state, 
                userChangeEmail: false,
                userIsAuthenticated: true
            }                         
        default:
            return state
    }
}