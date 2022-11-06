import { put, call, takeLatest, select } from 'redux-saga/effects';
import { TextField } from '@mui/material'
import {
  getCourse,
  getTopics,
  requestCourse as requestCourseAction,
  requestTopics as requestTopicsAction
} from './Reducer';

import { courseApi } from '../../api/courseApi';
import { lessonApi } from '../../api/lessonApi';

export const getCourseId = (state) => state.course.course_id;

export function* requestCourse({ payload }) {
  try {
    const courseId = payload;
    try {
      const { data } = yield call(courseApi.getDetail, courseId);
      const courseInfo = data.data;
      yield put(getCourse(courseInfo));
    } catch (e) {
      console.log(e.message || e.toString())
    }
  } catch (e) {
    const err = _get(e, 'response.data', {});
  }
}

export function* requestTopics() {
  try {
    try {
      let courseId = yield select(getCourseId);
      const { data } = yield call(lessonApi.getTopics, { course_id: courseId });
      const topicData = data.data;
      yield put(getTopics(topicData));
    } catch (e) {
      console.log(e.message || e.toString())
    }
  } catch (e) {
    const err = _get(e, 'response.data', {});
  }
}


function* courseSaga() {
  yield takeLatest(requestCourseAction, requestCourse);
  yield takeLatest(requestTopicsAction, requestTopics);

}
export default courseSaga;