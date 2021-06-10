# Multiple Reducers
[Link](https://www.youtube.com/watch?v=apcda524MJA&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=9)

We definitely could add a new action, and expand the switch cases in the reducer. However, as a developer, you need to configure how to seperate and classify what actions should be handle by a single reducer.
In this example, a shopkeeper who sell cakes shouldn't sell ice cream. Therefore, there will be another shopkeeper(eg. reducer) who is resposible for selling ice cream.

## Add another action
```javascript=
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'
function buyCake() {
    return (
        {
            type: BUY_CAKE,
            info: 'first redux action'
        }
    )
}
```
## Add another initial state
```javascript=
const initialIceCreamState = {
    numOfIceCream: 20
}
```

## Add another initial state reducer
```javascript=
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
```

## How to add two reducers into the Redux Store ?
