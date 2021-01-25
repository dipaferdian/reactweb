import {
    FETCH_FOOD_REQUEST,
    FETCH_FOOD_SUCCESS,
    FETCH_FOOD_FAILURE
  } from "../../actions/foods/food_type";
  
  const initialState = {
    loading: false,
    users: [],
    error: ''
  }
  
  const getreducer_Food = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_FOOD_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_FOOD_SUCCESS:
        return {
          loading: false,
          users: action.payload,
          error: ''
        }
      case FETCH_FOOD_FAILURE:
        return {
          loading: false,
          users: [],
          error: action.payload
        }
      default: return state
    }
  }
  


  export default getreducer_Food