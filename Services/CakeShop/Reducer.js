// (previousState, action)

// the initial state for the app
const initialState = {
    numOfCakes: 10
}

// set the initail state by the reducer
const reducer = (state = initialState, action) => {
    // use switch to decide what should we do depending action's type
    switch(action.type) {
    
        // use {...state} to pass the rest of the state
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

export {reducer}