import React, { useContext, useReducer } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';

import Amplify from 'aws-amplify';
import auth100 from './aws-exports';

import Context from './globalState/Context'
import Reducer from './globalState/Reducer'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

Amplify.configure(auth100);

const Root = () => {
    const initialState = useContext( Context )
    // console.log('>>>-index-Root-initialState->', initialState)
    const [ state, dispatch ] = useReducer( Reducer, initialState )
    // console.log('>>>-index-Root-state->', state)
    // console.log('>>>-index-Root-dispatch->', dispatch)

    return (
        <Router>
            <Context.Provider value={{ state, dispatch }}>
                <App />
            </Context.Provider>
        </Router>
    )
}

ReactDOM.render( <Root />, document.getElementById('root') )

serviceWorker.unregister()
