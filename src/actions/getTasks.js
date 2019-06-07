import {
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILED
} from "../reducers/todo";
export const getTasks = () => async dispatch => {
  dispatch({
    type: GET_TASKS_REQUEST
  });
  try {
    const data = await fetch("http://localhost:3000/tasks");
    const parsedData = await data.json();

    setTimeout(
      () =>
        dispatch({
          type: GET_TASKS_SUCCESS,
          payload: parsedData
        }),
      200
    );
  } catch (e) {
    dispatch({
      type: GET_TASKS_FAILED,
      payload: e
    });
  }
};
