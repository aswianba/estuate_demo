const initialState = {
  todoList: [],
  inProgress: false,
  error: "",
  updating:false
};

const fetchTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODO":
      return Object.assign({}, state, {
        inProgress: true,
      });
    case "UPDATE_TODO":
      return Object.assign({}, state, {
        updating: true,
      });
    case "FETCH_TODO_SUCCESS":
      return Object.assign({}, state, {
        todoList: action.response,
        inProgress: false,
        error: "",
      });
    case "UPDATE_TODO_SUCCESS":  
      return Object.assign({}, state, {
        todoList: state.todoList.map(todo => {
          if(todo.id === action.response.id){
            todo = action.response;
          }
          return todo;
        }),
        updating: false,
        error: "",
      });
    case "FETCH_TODO_FAILURE":
      return Object.assign({}, state, {
        todoList: [],
        inProgress: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export default fetchTodoReducer;
