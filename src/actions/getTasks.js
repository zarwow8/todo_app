export const getTasks = () => async dispatch => {
  dispatch({
    type: "GET_TASKS_REQUEST"
  });
  try {
    const data = await fetch("http://localhost:3000/tasks");
    const parsedData = await data.json();

    setTimeout(
      () =>
        dispatch({
          type: "GET_TASKS_SUCCESS",
          payload: parsedData
        }),
      2000
    );
  } catch (e) {
    dispatch({
      type: "GET_TASKS_FAILED",
      payload: e
    });
  }

  return "done";
};
