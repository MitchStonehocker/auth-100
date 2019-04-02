// src/components/PrivateRoute.js

import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Context from './Context'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { state } = useContext(Context)
    console.log('>>>-PrivateRoute-state.userIsAuthenticated->', state.userIsAuthenticated)

    return (
        <Route 
            render={
                props => !state.userIsAuthenticated ? (
                    <Redirect to='/signin' />
                ) : (
                    <Component {...props} />
                )
            }
            { ...rest }
        />
    )
}

export default PrivateRoute
