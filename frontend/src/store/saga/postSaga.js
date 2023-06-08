import { put, takeEvery, call } from 'redux-saga/effects';
import {
  setMaxPageCreator, setPageCreator, setPostCreator, setPostStatusCreator,
} from '../actions';
import { fetchPostsApi } from '../../https/postApi';
import { fetchUserPostsApi } from '../../https/userApi';
import {FETCH_POST, FETCH_USER, FIND_POST} from '../../utils/const';
import delay from "../../utils/delay";

function* fetchPostWorker(action) {
  yield put(setPostStatusCreator('pending'));
  yield delay();
  const { data, maxPage } = yield call(fetchPostsApi, action);
  yield put(setPageCreator(action.page));
  yield put(setPostCreator(data));
  yield put(setMaxPageCreator(maxPage));
  yield put(setPostStatusCreator('fulfilled'));
}

function* fetchUserPostWorker({ payload }) {
  yield put(setPostStatusCreator('pending'));
  yield delay();
  const data = yield call(fetchUserPostsApi, payload);
  yield put(setPostCreator(data));
  yield put(setPostStatusCreator('fulfilled'));
}

export default function* postWatcher() {
  yield takeEvery(FETCH_POST, fetchPostWorker);
  yield takeEvery(FETCH_USER, fetchUserPostWorker);
  yield takeEvery(FIND_POST, fetchPostWorker);
}
