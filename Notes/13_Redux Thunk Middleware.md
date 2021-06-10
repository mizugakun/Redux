# Redux Thunk Middleware

## Async actions
* Install **axios**: Request to an API end point
* Install **redux-thunk**: Define async *action creators*. A middleware.
* Type `npm install axios redux-thunk` to install two packages

## Code
```javascript
// use middleware in redux
const applyMiddleware = redux.applyMiddleware
// import redux-thunk
const thunkMiddleware = require('redux-thunk').default
// import axios
const axios = require('axios')

// initial state
// ...
// actions
// ...
// action creators
// ...
// reducer
// ...

// define async action creator: instead of an object, the creator will return a function as an action
const fetchUsers = () => {
    // the function receive the dispatch method as parameter
    return function(dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // response.data is the array of users
                const users = response.data.map(user => user.id)
                dispatch(fetchUserSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUserFailuer(errorMsg))
                // error.message is the error description
            })
    }
}

// apply middleware
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
// subscribe to store
store.subscribe(() => console.log(store.getState()))
// dispatch asyn action creator
store.dispatch(fetchUsers())
```
