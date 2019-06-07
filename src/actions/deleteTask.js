import {
  DEL_TASKS_REQUEST,
  DEL_TASKS_SUCCESS,
  DEL_TASKS_FAILED
} from "../reducers/todo";

export const deleteTask = id => async dispatch => {
  dispatch({
    type: DEL_TASKS_REQUEST
  });

  try {
    const delReq = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE"
    });
    const data = await fetch("http://localhost:3001/tasks");

    const parsedData = await data.json();

    setTimeout(
      () =>
        dispatch({
          type: DEL_TASKS_SUCCESS,
          payload: parsedData
        }),
      200
    );
  } catch (e) {
    dispatch({
      type: DEL_TASKS_FAILED,
      payload: e
    });
  }
};
