import { put, call } from "redux-saga/effects";
import callAxios from "../api/api";

export default function* fetchTodoSaga(action) {
  try {
    const response = yield call(callAxios, "", {}, "GET");
    if (response) {
      yield put({ type: "FETCH_TODO_SUCCESS", response: response.data });
    } else {
      yield put({
        type: "FETCH_TODO_FAILURE",
        error: "Error while fetching data",
      });
    }
  } catch (e) {
    yield put({ type: "FETCH_TODO_FAILURE", error: e });
  }
}
