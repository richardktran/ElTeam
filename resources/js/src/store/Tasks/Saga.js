import { put, call, takeLatest } from 'redux-saga/effects';
import { getTasks, requestTasks as requestTaskAction } from './Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { groupApi } from '../../api/groupApi';

// const group_id = useSelector(state => state.groupTasks.group_id);

// export function* updateTasks() {
//   try {
//     const [tasks] = yield call(groupApi.getTasks, groupId);
//     yield put(updateTasksAction(tasks));
//   } catch (e) {
//     const err = _get(e, 'response.data', {});
//   }
// }

export function* requestTasks({ payload }) {
  try {
    const groupId = payload;
    try {
      const { data } = yield call(groupApi.getTasks, groupId);
      const tasks = data.data;
      yield put(getTasks(tasks));
    } catch (e) {
      console.log(e.message || e.toString())
    }
    // console.log(tasks);
    // yield put(getTasks(tasks));
  } catch (e) {
    const err = _get(e, 'response.data', {});
  }
}


function* tasksSaga() {
  yield takeLatest(requestTaskAction, requestTasks);

}
export default tasksSaga;