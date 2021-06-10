const redux = require('redux')
// include the redux-logger package
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

// apply middleware method in redux
const applyMiddleware = redux.applyMiddleware
// create a logger middleware
const logger = reduxLogger.createLogger()

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

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// pass applyMiddleware method with logger middleware as parameter into createStore method as the second parameters 
const store = createStore(rootReducer, applyMiddleware(logger))
console.log("initial state", store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()