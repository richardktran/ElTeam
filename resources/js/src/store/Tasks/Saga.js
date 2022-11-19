import { put, call, takeLatest } from 'redux-saga/effects';
import { TextField } from '@mui/material'
import {
  getTask,
  getTasks,
  getGroupInfo,
  requestTask as requestTaskInfoAction,
  requestTasks as requestTaskAction,
  requestGroupInfo as requestGroupInfoAction,
  updateTaskPosition as updateTaskPositionAction,
  updateContentTask as updateContentTaskAction,
  updateTitleTask as updateTitleTaskAction,
  updateAssignees as updateAssigneesAction,

} from './Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { groupApi } from '../../api/groupApi';


export function* requestTask({ payload }) {
  try {
    const { task_id } = payload;
    try {
      const { data } = yield call(groupApi.getTask, task_id);
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

export function* requestGroupInfo({ payload }) {
  try {
    const { course_id } = payload;
    try {
      const { data } = yield call(groupApi.getInfo, course_id);
      const groupInfo = data.data;
      yield put(getGroupInfo(groupInfo));
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
    yield put(requestTaskInfoAction({ task_id: taskId, loading: false }));
    yield put(requestTaskAction({ group_id: groupId, loading: false }));
  } catch (e) {
    console.log(e);
    const err = _get(e, 'response.data', {});
  }
}

export function* updateAssigneesTask({ payload }) {
  try {
    const { assignees, taskId } = payload;
    const data = {
      assignees: assignees
    }
    const task = yield call(groupApi.updateContentTask, taskId, data);
    const groupId = task.data.data.group_id;
    yield put(requestTaskAction({ group_id: groupId, loading: false }));
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
    yield put(requestTaskInfoAction({ task_id: taskId, loading: false }));
    yield put(requestTaskAction({ group_id: groupId, loading: false }));
  } catch (e) {
    console.log(e);
    const err = _get(e, 'response.data', {});
  }
}

export function* requestTasks({ payload }) {
  try {
    const { group_id } = payload;
    try {
      const { data } = yield call(groupApi.getTasks, group_id);
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
  yield takeLatest(requestTaskInfoAction, requestTask);
  yield takeLatest(requestGroupInfoAction, requestGroupInfo);
  yield takeLatest(requestTaskAction, requestTasks);

  yield takeLatest(updateTaskPositionAction, updateTaskPosition);
  yield takeLatest(updateContentTaskAction, updateContentTask);
  yield takeLatest(updateTitleTaskAction, updateTitleTask);
  yield takeLatest(updateAssigneesAction, updateAssigneesTask);

}
export default tasksSaga;