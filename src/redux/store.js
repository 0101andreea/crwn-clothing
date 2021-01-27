import {createStore, applyMiddleware} from 'redux'
//add Middleware to our store , so when some actions get fired or dispatched we can catch them and display them 
//middleware is between action and root reducer 

import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [logger]
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store