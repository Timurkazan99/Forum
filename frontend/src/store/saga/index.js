import { all } from 'redux-saga/effects';
import postWatcher from './postSaga.js';
import commentWatcher from './commentSaga.js';
import userWatcher from './userSaga.js';

export default function* rootWatcher() {
  yield all([postWatcher(), commentWatcher(), userWatcher()]);
}
