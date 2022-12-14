import { put, call, takeLatest, select } from 'redux-saga/effects';
import { TextField } from '@mui/material'
import {
  getCourse,
  getTopics,
  requestCourse as requestCourseAction,
  requestTopics as requestTopicsAction,
  updateTopicPosition as updateTopicPositionAction,
  updateActivities as updateActivitiesAction,
} from './Reducer';

import { courseApi } from '../../api/courseApi';
import { lessonApi } from '../../api/lessonApi';

export const getCourseId = (state) => state.course.course_id;

export function* requestCourse({ payload }) {
  try {
    const { course_id } = payload;
    try {
      const { data } = yield call(courseApi.getDetail, course_id);
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

export function* updateTopicsPosition({ payload }) {
  try {
    const { newTopics, courseId } = payload;
    const data = {
      course_id: courseId,
      topics: newTopics
    }
    yield call(lessonApi.updateTopicsPosition, data);
  } catch (e) {
    const err = _get(e, 'response.data', {});
    console.log(e);
  }
}

export function* updateActivities({ payload }) {
  try {
    const { newActivities } = payload;
    const data = {
      activities: newActivities
    }
    yield call(lessonApi.updateActivities, data);
  } catch (e) {
    const err = _get(e, 'response.data', {});
    console.log(e);
  }
}


function* courseSaga() {
  yield takeLatest(requestCourseAction, requestCourse);
  yield takeLatest(requestTopicsAction, requestTopics);
  yield takeLatest(updateTopicPositionAction, updateTopicsPosition);
  yield takeLatest(updateActivitiesAction, updateActivities);

}
export default courseSaga;