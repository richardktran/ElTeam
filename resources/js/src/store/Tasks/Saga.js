import { put, call, takeLatest } from 'redux-saga/effects';
import { updateTasks as updateTasksAction } from './Reducer';

export function* updateTasks() {
  try {
    const [tasks] = yield call();
    yield put(updateTasksAction(tasks));
  } catch (e) {
    const err = _get(e, 'response.data', {});
  }
}


function* tasksSaga() {
  yield takeLatest(updateTasks, updateTasksAction);

}
export default tasksSaga;