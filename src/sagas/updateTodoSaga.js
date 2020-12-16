import { put, call } from "redux-saga/effects";
import callAxios from "../api/api";

export default function* updateTodoSaga(action) {
  try {
    const response = yield call(callAxios, `/${action.payload.id}`, {}, "PUT",action.payload);
    if (response) {
      yield put({ type: "UPDATE_TODO_SUCCESS", response:response.data});
    } else {
      yield put({
        type: "FETCH_TODO_FAILURE",
        error: "Error while updating  data",
      });
    }
  } catch (e) {
    yield put({ type: "FETCH_TODO_FAILURE", error: e });
  }
}
