//the actual code  that will combine all the states together ; break the code 

import {combineReducers} from 'redux'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'


export default combineReducers({
    //create the root reducer
    //the actual key users 
    user:userReducer,
    cart: cartReducer
})