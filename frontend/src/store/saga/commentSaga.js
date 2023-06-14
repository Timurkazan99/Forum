import { put, takeEvery, call } from 'redux-saga/effects';
import { addCommentsCreator, setCommentsErrorCreator, setCommentsStatusCreator } from '../actions';
import { fetchCommentsApi } from '../../https/postApi';
import { FETCH_COMMENTS } from '../../utils/const';
import delay from '../../utils/delay';

function* fetchCommentWorker({ payload }) {
  try {
    yield put(setCommentsStatusCreator('pending'));
    yield delay();
    const data = yield call(fetchCommentsApi, payload);
    yield put(addCommentsCreator(data));
    yield put(setCommentsStatusCreator('fulfilled'));
  } catch (e) {
    yield put(setCommentsStatusCreator('rejected'));
    yield put(setCommentsErrorCreator(e));
  }
}

export default function* commentWatcher() {
  yield takeEvery(FETCH_COMMENTS, fetchCommentWorker);
}
