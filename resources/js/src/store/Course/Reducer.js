import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'

const initialItems = {
  course_id: 107,
  courseInfo: {},
  lesson: {
    topic: {}
  }
};

const courses = createSlice({
  name: 'courses',
  initialState: initialItems,
  reducers: {
    requestCourse: (state, action) => {
      const course_id = action.payload;
      return {
        ...state,
        submitting: true,
        course_id: parseInt(course_id)
      }
    },
    getCourse: (state, action) => {
      const courseInfo = action.payload;
      return {
        ...state,
        submitting: false,
        courseInfo
      }
    },
  }
});

const { reducer, actions } = courses;
export const {
  getCourse,
  requestCourse,
} = actions;

export default reducer;
