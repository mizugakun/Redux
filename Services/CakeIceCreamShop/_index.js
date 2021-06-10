const redux = require('redux')
const createStore = redux.createStore
// create a combineReducer
const combineReducers = redux.combineReducers

// implement another action, initial state, and reducer
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

const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCream: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}

// create a root reducer to combine other reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// pass the root reducer to createStore method
const store = createStore(rootReducer)
console.log("initial state", store.getState())
const unsubscribe = store.subscribe(() => console.log("Update state", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()