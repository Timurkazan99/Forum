import { put, takeEvery, call } from 'redux-saga/effects';
import { addCommentsCreator, setCommentsStatusCreator } from '../actions';
import { fetchCommentsApi } from '../../https/postApi';
import { FETCH_COMMENTS } from '../../utils/const';
import delay from "../../utils/delay";

function* fetchCommentWorker({ payload }) {
  yield put(setCommentsStatusCreator('pending'));
  yield delay();
  const data = yield call(fetchCommentsApi, payload);
  yield put(addCommentsCreator(data));
  yield put(setCommentsStatusCreator('fulfilled'));
}

export default function* commentWatcher() {
  yield takeEvery(FETCH_COMMENTS, fetchCommentWorker);
}
