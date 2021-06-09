# Three Principles
[Link](https://www.youtube.com/watch?v=_KhGdZEWC4c&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=4)

## First Principle
***The state of you application is stored in one object within a single store***
Maintain our application state in a single object which would be managed by Redux store

**Cake Shop**:
*Let's assume we are tracking the # of cakes on the shelf*
```javascript=
{
    numberOfCakes: 10
}
```

## Second Principle
***The only way to change the state is to emit(dispatch) ab action, an object describing what happened***

To update the state of your app, you need to let Redux know about that with an action.
Not allow to directly update the state object.
**Cake Shop**
*Let the shopkeeper know our action - BUY_CAKE*
```javascript=
{
    type: BUY_CAKE
}
```

## Third Principle
***To specify how the state tree transformed by action, you write the pure reducers***
Reducer - (previousState, action) => newState

**Cake Shop**
*Reducer is the shopkeeper*
```javascript=
const reducer = (state, action) => {
    switch(action.type) {
        case: BUY_CAKE: return {
            numOfCakes: state.numOfCakes - 1
        }
    }
}
```

## Summary
Assume that we have a JavaScript application. The state of the app will be stored in Redux Store, and the app will always subscribe this Redux Store. Instead of changing the states dirctly, the app must emit/dispatch an action to the reducer first. The Reducer will then handle the action and update the state in the Redux Store, and the value will finally pass back to the application.