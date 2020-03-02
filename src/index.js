import React from 'react'
import ReactDOM from 'react-dom'

import App from './routes/App'
import './assets/styles/App.scss'

import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducer from './redux/reducers/index'
import {initialState} from './redux/initialState'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancers())


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('app'))

