import { put, takeEvery, call } from 'redux-saga/effects';
import { setUserStatusCreator, setUserCreator, setUserErrorCreator } from '../actions';
import { fetchUserApi } from '../../https/userApi';
import { FETCH_USER } from '../../utils/const';
import delay from '../../utils/delay';

function* fetchUserWorker({ payload }) {
  try {
    yield put(setUserStatusCreator('pending'));
    yield delay();
    const data = yield call(fetchUserApi, payload);
    yield put(setUserCreator(data));
    yield put(setUserStatusCreator('fulfilled'));
  } catch ({ message }) {
    yield put(setUserStatusCreator('rejected'));
    yield put(setUserErrorCreator(message));
  }
}

export default function* userWatcher() {
  yield takeEvery(FETCH_USER, fetchUserWorker);
}
