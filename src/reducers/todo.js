export const DEL_TASKS_REQUEST = "DEL_TASKS_REQUEST";
export const DEL_TASKS_SUCCESS = "DEL_TASKS_SUCCESS";
export const DEL_TASKS_FAILED = "GET_TASKS_FAILED";

export const GET_TASKS_REQUEST = "GET_TASKS_REQUEST";
export const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS";
export const GET_TASKS_FAILED = "GET_TASKS_FAILED";

export const ADD_TASKS_FAILED = "ADD_TASKS_FAILED";
export const ADD_TASKS_SUCCESS = "ADD_TASKS_SUCCESS";
export const ADD_TASKS_REQUEST = "ADD_TASKS_REQUESt";

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
    case "ADD_TASKS_REQUEST":
      return { ...state, isFetching: true };

    case "ADD_TASKS_SUCCESS":
      return { ...state, isFetching: false, tasks: action.payload };

    case "ADD_TASKS_FAILED":
      return { ...state, isFetching: false, error: action.payload.message };
    default:
      return state;
  }
};

export { todoReducer };
