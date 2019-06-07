const initialState = {
  tasks: [],
  isFetching: false,
  error: ""
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TASKS_REQUEST":
      return { ...state, isFetching: true };
    case "GET_TASKS_SUCCESS":
      return { ...state, isFetching: false, tasks: action.payload };
    case "GET_TASKS_FAILED":
      return { ...state, isFetching: false, error: action.payload.message };

    case "DEL_TASKS_REQUEST":
      return { ...state, isFetching: true };

    case "DEL_TASKS_SUCCESS":
      return { ...state, isFetching: false, tasks: action.payload };

    case "DEL_TASKS_FAILED":
      return { ...state, isFetching: false, error: action.payload.message };
    default:
      return state;
  }
};

export { todoReducer };
