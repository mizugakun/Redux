# Async Actions

## Syncronous Actions
* As soon as an action was dispatched, the state was immediately updated.
* If you dispatch BUY_CAKE actionm the numOfCake was right away decremented by 1.
* Same with BUY_ICECREAM action as well.

## Asyncronous Actions
Asyncronous API calls to fetch data from an end point and use data in your application

## example application
* Fetches a list of users from an API end point and stores it in the redux store.
* ***State***
```javascript=
state={
    loading: true,
    data:[],
    error:''
}
```
**loading**: Display a loading spinner in your component
**data**: List od user
**error**: Display error to user

* ***Actions***
1. **FETCH_USER_REQUEST**
2. **FETCH_USER_SUCESS**
3. **FETCH_USER_FAILURE**

* Reducers
1. case: **FETCH_USER_REQUEST**
    loading: true
2. **FETCH_USER_SUCESS**
    loading: false
    user: data {from API}
3. **FETCH_USER_FAILURE**
    loading: false
    error: error {from API}

## Code
```javascript
const redux = require('redux')
const createStore = redux.createStore

// state
const initailState = {
    loading: false,
    users: [],
    error:''
}

// actions
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCESS = 'FETCH_USER_SUCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

// action creator
// second parameter "payload": where we put the data that fetch from API
const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = users => {
    return {
        type: FETCH_USER_SUCESS,
        payload: users
    }
}

const fetchUserFailuer = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

//reducers
const reducer = (state = initailState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USER_SUCESS:
            return  {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        
        case FETCH_USER_FAILURE:
            return  {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            } 
    }
}

// redux-store
const store = createStore(reducer)
```