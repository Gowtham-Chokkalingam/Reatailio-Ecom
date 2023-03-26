import axios from "axios";
import { API_URL } from "../../API/api";
import { TODO_POST_FAIL, TODO_POST_REQUEST, TODO_POST_SUCCESS } from "../ActionTypes/todoActionTypes";

const API = API_URL;

//> Post-Create

export const todoPostAction = (formData, Toaster) => async (dispatch, getState) => {
  try {
    dispatch({ type: TODO_POST_REQUEST });

    const {
      UserLogin: { token },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
    };
    const { data } = await axios.post(`${API}/addTodo`, formData, config);

    dispatch({ type: TODO_POST_SUCCESS, payload: data });
    Toaster("Job Applied", `You Have New Todo`, "success");
  } catch (error) {
    dispatch({ type: TODO_POST_FAIL, payload: error.response.data.message || error.message });
  }
};

//> GetAll
export const getAppliedJobAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: APPLIED_JOBLIST_REQUEST,
    });

    dispatch({ type: DELETE_JOBLIST_REST });
    const {
      UserLogin: { token },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",

        Authorization: `Bearer ${token.token}`,
      },
    };
    const { data } = await axios.get(`${API}/job/getAppliedjobs`, config);

    dispatch({
      type: APPLIED_JOBLIST_SUCCESS,
      payload: data.appliedJobs,
    });
    dispatch({ type: APPLY_JOB_REST });
  } catch (error) {
    dispatch({ type: APPLIED_JOBLIST_FAIL, payload: error.response.data.message || error.message });
  }
};

//> Update

export const updateAppliedJobAction = (id, Status, Toaster) => async (dispatch, getState) => {
  try {
    dispatch({
      type: APPLIED_JOB_UPDATE_REQUEST,
    });

    const {
      UserLogin: { token },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    };
    const { data } = await axios.patch(`${API}/job/updateAppliedjob/${id}`, { Status }, config);
    console.log("data:", data);

    dispatch({
      type: APPLIED_JOB_UPDATE_SUCCESS,
      payload: data.appliedJobs,
    });
    Toaster("Status Updated", `You Have Updated Job Status To ${Status} `, "success");
  } catch (error) {
    dispatch({ type: APPLIED_JOB_UPDATE_FAIL, payload: error.response.data.message || error.message });
  }
};

//> Delete
export const deleteAppliedJobAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_APPLIED_JOB_REQUEST,
    });

    const {
      UserLogin: { token },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    };
    const { data } = await axios.delete(`${API}/job/deleteAppliedjob/${id}`, config);

    dispatch({
      type: DELETE_APPLIED_JOB_SUCCESS,
      payload: data,
    });
    dispatch({ type: APPLY_JOBLIST_REST });
  } catch (error) {
    dispatch({ type: DELETE_APPLIED_JOB_FAIL, payload: error.response.data.message || error.message });
  }
};

//> Reset
export const appliedJobListReset = () => async (dispatch) => {
  dispatch({ type: APPLY_JOBLIST_REST });
};
