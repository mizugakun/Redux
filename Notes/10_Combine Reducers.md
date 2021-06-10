# Combine Reducers
[Link](https://www.youtube.com/watch?v=EKsoj96HQGY&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=10)

## CombineReducer
Redux provide `CombineReducers` method to combine multiple reducers into one single reducer which can be then passed to `createStore(reducer)` method.

### Code
```javascript=
// create an object to store combineReducers method
const combineReducers = redux.combineReducers

// create a root reducer by combining two reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// pass the root reducer into createStore method
const store = createStore(rootReducer)
```