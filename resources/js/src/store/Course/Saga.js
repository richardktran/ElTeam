import { put, call, takeLatest } from 'redux-saga/effects';
import { TextField } from '@mui/material'
import {
  getCourse,
  requestCourse as requestCourseAction,
} from './Reducer';

import { courseApi } from '../../api/courseApi';


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


function* courseSaga() {
  yield takeLatest(requestCourseAction, requestCourse);

}
export default courseSaga;