import { combineReducers } from "redux";
import fetchTodoReducer from "./fetchTodoReducer";


export const allreducers = combineReducers({
  fetchTodoReducer: fetchTodoReducer,
 
});
