import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    POST_USERS_REQUEST,
    POST_USERS_SUCCESS,
    POST_USERS_FAILURE,
  } from "../redux/userTypes";
  
  const initialState = {
    loading: false,
    users: [],
    error: ''
  }
  
  const getreducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_USERS_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: ''
        }
      case FETCH_USERS_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload
        }
      default: return state
    }
  }
  

  const postreducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_USERS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case POST_USERS_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: ''
        }
      case POST_USERS_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload
        }
      default: return state
    }
  }
  

  export default getreducer