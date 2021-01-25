import axios from "axios";
import {
  FETCH_FOOD_REQUEST,
  FETCH_FOOD_SUCCESS,
  FETCH_FOOD_FAILURE
} from "./food_type";

export default function fetch_Food (){

  var config = {
    method: "get",
    url: "http://localhost:3001/foods",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiam9obmRvZSIsImlhdCI6MTYxMTUwODI4OH0._uceQhnDhvXHhLa5ig3nI13CyO8BVavV8twWKdzvVxw",
    },
  };

  return (dispatch) => {
    dispatch(fetchFoodRequest());
    axios(config)
      .then((response) => {
        // response.data is the users
        const users = response.data;
        dispatch(fetchFoodSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchFoodFailure(error.message));
      });
  };
};


export const fetchFoodRequest = () => {
  return {
    type: FETCH_FOOD_REQUEST,
  };
};

export const fetchFoodSuccess = (users) => {
  return {
    type: FETCH_FOOD_SUCCESS,
    payload: users,
  };
};

export const fetchFoodFailure = (error) => {
  return {
    type: FETCH_FOOD_FAILURE,
    payload: error,
  };
};

