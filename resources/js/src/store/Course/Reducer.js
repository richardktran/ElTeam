import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'

const initialItems = {
  course_id: 107,
  courseInfo: {},
  lesson: {
    topics: []
  }
};

const courses = createSlice({
  name: 'courses',
  initialState: initialItems,
  reducers: {
    requestCourse: (state, action) => {
      let isLoading = true;
      if (action.payload) {
        isLoading = action.payload.loading === undefined ? true : action.payload.loading;
      }
      const { course_id } = action.payload;
      return {
        ...state,
        submitting: isLoading,
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
    requestTopics: (state, action) => {
      let isLoading = true;
      if (action.payload) {
        isLoading = action.payload.loading === undefined ? true : action.payload.loading;
      }
      return {
        ...state,
        submitting: isLoading,
      }
    },
    getTopics: (state, action) => {
      const topics = action.payload;
      return {
        ...state,
        submitting: false,
        lesson: {
          topics
        }
      }
    },
    updateTopicPosition: (state, action) => {
      const { courseId, newTopics } = action.payload;
      return {
        ...state,
        submitting: false,
        lesson: {
          topics: newTopics
        }
      }
    },
    updateActivities: (state, action) => {
      const { topicId, newActivities } = action.payload;
      return {
        ...state,
        lesson: {
          topics: state.lesson.topics.map(topic => {
            let newTopic = { ...topic };
            if (topic.id === topicId) {
              newTopic.activities = newActivities;
            }
            return newTopic;
          })
        }
      }
    }
  }
});

const { reducer, actions } = courses;
export const {
  getCourse,
  getTopics,
  requestCourse,
  requestTopics,
  updateTopicPosition,
  updateActivities
} = actions;

export default reducer;
