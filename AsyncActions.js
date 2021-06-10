const redux = require('redux')
const createStore = redux.createStore
// use middleware in redux
const applyMiddleware = redux.applyMiddleware
// import redux-thunk
const thunkMiddleware = require('redux-thunk').default
// import axios
const axios = require('axios')


const initailState = {
    loading: false,
    users: [],
    error:''
}

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCESS = 'FETCH_USER_SUCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

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