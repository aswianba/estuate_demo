
import { takeLatest } from "redux-saga/effects";
import updateTodo from "../actions/updateTodo";
import fetchTodoSaga from './fetchTodoSaga';
import updateTodoSaga from './updateTodoSaga'

export default function* saga() {
    yield takeLatest("FETCH_TODO", fetchTodoSaga);
    yield takeLatest("UPDATE_TODO",updateTodoSaga);
}
