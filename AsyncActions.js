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

