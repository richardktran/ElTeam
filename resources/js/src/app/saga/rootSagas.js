import { all, fork } from 'redux-saga/effects';
import tasksSaga from '../../store/Tasks/Saga';

export default function* rootSagas() {
  yield all([
    yield fork(tasksSaga),
  ]);
}