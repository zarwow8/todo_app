import {
  ADD_TASKS_REQUEST,
  ADD_TASKS_SUCCESS,
  ADD_TASKS_FAILED
} from "../reducers/todo";

export const addTask = task => async dispatch => {
  try {
    dispatch({
      type: ADD_TASKS_REQUEST
    });
    const dataJson = JSON.stringify(task);
    const addReq = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: dataJson
    });

    const data = await fetch("http://localhost:3000/tasks");
    const parsedData = await data.json();

    setTimeout(
      () =>
        dispatch({
          type: ADD_TASKS_SUCCESS,
          payload: parsedData
        }),
      200
    );
  } catch (e) {
    dispatch({
      type: ADD_TASKS_FAILED,
      payload: e
    });
  }
};
