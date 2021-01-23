import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  POST_USERS_REQUEST,
  POST_USERS_SUCCESS,
  POST_USERS_FAILURE,
} from "../redux/userTypes";

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("http://localhost:3333/person")
      .then((response) => {
        // response.data is the users
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const postUsers = (setname) => {
  return (dispatch) => {
    dispatch(postUsersRequest());
    axios
      .post("http://localhost:3333/person", {
        setname:setname,
        seturl:'null'
      })
      .then((response) => {
        // response.data is the users
        const users = response.data;
        dispatch(postUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(postUsersFailure(error.message));
      });
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const postUsersRequest = () => {
  return {
    type: POST_USERS_REQUEST,
  };
};

export const postUsersSuccess = (users) => {
  return {
    type: POST_USERS_SUCCESS,
    payload: users,
  };
};

export const postUsersFailure = (error) => {
  return {
    type: POST_USERS_FAILURE,
    payload: error,
  };
};
