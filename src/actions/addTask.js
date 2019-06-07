export const addTask = task => async dispatch => {
  try {
    dispatch({
      type: "DEL_TASKS_REQUEST"
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
