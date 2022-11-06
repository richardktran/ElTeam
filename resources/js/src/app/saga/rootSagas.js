import { all, fork } from 'redux-saga/effects';
import tasksSaga from '../../store/Tasks/Saga';
import courseSaga from '../../store/Course/Saga';

export default function* rootSagas() {
  yield all([
    yield fork(tasksSaga),
    yield fork(courseSaga),
  ]);
}