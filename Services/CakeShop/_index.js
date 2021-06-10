// we need to use 'require' sytax to import thr library due to this is a simple JavaScript app
const redux = require('redux')
// create redux store
const createStore = redux.createStore;

// Action
const BUY_CAKE = 'BUY_CAKE'
function buyCake() {
    return (
        {
            type: BUY_CAKE,
            info: 'first redux action'
        }
    )
}

// Reducer
const initialState = {
    numOfCakes: 10
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
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