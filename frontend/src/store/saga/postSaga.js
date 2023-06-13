import { put, takeEvery, call } from 'redux-saga/effects';
import { setMaxPageCreator, setPostCreator, setPostStatusCreator } from '../actions';
import { fetchPostsApi } from '../../https/postApi';
import { FETCH_POST } from '../../utils/const';
import delay from '../../utils/delay';

function* fetchPostWorker() {
  yield put(setPostStatusCreator('pending'));
  yield delay();
  const { data, maxPage } = yield call(fetchPostsApi);
  yield put(setPostCreator(data));
  yield put(setMaxPageCreator(maxPage));
  yield put(setPostStatusCreator('fulfilled'));
}

export default function* postWatcher() {
  yield takeEvery(FETCH_POST, fetchPostWorker);
}
