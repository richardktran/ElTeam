import { put, call, takeLatest } from 'redux-saga/effects';
import { TextField } from '@mui/material'
import {
  getTask,
  getTasks,
  requestTask as requestTaskInfoAction,
  requestTasks as requestTaskAction,
  updateTaskPosition as updateTaskPositionAction,
  updateContentTask as updateContentTaskAction,
  updateTitleTask as updateTitleTaskAction,
} from './Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { groupApi } from '../../api/groupApi';


export function* requestTask({ payload }) {
  try {
    const taskId = payload;
    try {
      const { data } = yield call(groupApi.getTask, taskId);
      const task = data.data;
      yield put(getTask(task));
    } catch (e) {
      console.log(e.message || e.toString())
    }
    // console.log(tasks);
    // yield put(getTasks(tasks));
  } catch (e) {
    const err = _get(e, 'response.data', {});
  }
}

export function* updateTaskPosition({ payload }) {
  try {
    const { sections, groupId } = payload;
    const data = {
      sections: sections
    }
    yield call(groupApi.updateTaskPosition, groupId, data);
  } catch (e) {
    const err = _get(e, 'response.data', {});
  }
}

export function* updateContentTask({ payload }) {
  try {
    const { content, taskId } = payload;
    const data = {
      content: content
    }
    const task = yield call(groupApi.updateContentTask, taskId, data);
    const groupId = task.data.data.group_id;
    yield put(requestTaskInfoAction(taskId));
    yield put(requestTaskAction(groupId));
  } catch (e) {
    console.log(e);
    const err = _get(e, 'response.data', {});
  }
}

export function* updateTitleTask({ payload }) {
  try {
    const { title, taskId } = payload;
    const data = {
      title: title
    }
    const task = yield call(groupApi.updateContentTask, taskId, data);
    const groupId = task.data.data.group_id;
    yield put(requestTaskInfoAction(taskId));
    yield put(requestTaskAction(groupId));
  } catch (e) {
    console.log(e);
    const err = _get(e, 'response.data', {});
  }
}

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
  yield takeLatest(requestTaskInfoAction, requestTask);
  yield takeLatest(requestTaskAction, requestTasks);
  yield takeLatest(updateTaskPositionAction, updateTaskPosition);
  yield takeLatest(updateContentTaskAction, updateContentTask);
  yield takeLatest(updateTitleTaskAction, updateTitleTask);

}
export default tasksSaga;