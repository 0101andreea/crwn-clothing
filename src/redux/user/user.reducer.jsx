// a function that gets only 2 props: a state object that represents the last state or the initial state adn then receives an action
//that action is just an object with type and payload that can be anything

const INITIAL_STATE = {
    currentUser:null
}

const userReducer = (state = INITIAL_STATE, action) => {
    //return the actual state
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                //saving the current user value with payload
                currentUser: action.payload
            }


        default:
            return state

    }
}

export default userReducer