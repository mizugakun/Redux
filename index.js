const redux = require('redux')
const createStore = redux.createStore;

// implement another reducer

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'
function buyCake() {
    return (
        {
            type: BUY_CAKE,
            info: 'first redux action'
        }
    )
}
function buyIceCream() {
    return (
        {
            type: BUY_ICE_CREAM,
            info: 'second redux action'
        }
    )
}

// the initial state for the app
const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCream: 20
}

// set the initail state by the reducer
// (previousState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
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
const iceCreamReducer = (state = initialIceCreamState, action) => {
    // use switch to decide what should we do depending action's type
    switch(action.type) {
    
        // use {...state} to pass the rest of the state
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }

        default: return state
    }
}

// createStore method recive a reducer as a parameter parameter
// the Reducer will hold the state o f the application. The store will then hold the state by passing reducer to createStore method
const store = createStore(reducer)
// read the state by getState method
console.log("initial state", store.getState())
// allow the app to subscribe the changes in the store. This method can receive function as argument
const unsubscribe = store.subscribe(() => console.log("Update state", store.getState()))
// update the state using dispatch method
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
// unsubscribe any cahnges to the store by calling the function return by the subscribe method
unsubscribe()
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())