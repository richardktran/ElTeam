import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'

const initialItems = {
  group_id: 107,
  // submitting: false,
  currentTask: {},
  groupInfo: {},
  sections: []
};

const groupTasks = createSlice({
  name: 'groupTasks',
  initialState: initialItems,
  reducers: {
    requestTask: (state, action) => {
      let isLoading = true;
      if (action.payload) {
        isLoading = action.payload.loading === undefined ? true : action.payload.loading;
      }
      const { task_id } = action.payload;
      return {
        ...state,
        submitting: isLoading,
        currentTask: {
          ...state.currentTask,
          id: task_id
        }
      }
    },
    requestTasks: (state, action) => {
      let isLoading = true;
      if (action.payload) {
        isLoading = action.payload.loading === undefined ? true : action.payload.loading;
      }
      console.log('requestTasks: ', isLoading);
      const { group_id } = action.payload;
      return {
        ...state,
        submitting: isLoading,
        group_id
      }
    },
    requestGroupInfo: (state, action) => {
      let isLoading = true;
      if (action.payload) {
        isLoading = action.payload.loading === undefined ? true : action.payload.loading;
      }
      const { course_id } = action.payload;
      return {
        ...state,
        submitting: isLoading,
        groupInfo: {
          ...state.groupInfo,
          course_id
        }
      }
    },
    getTask: (state, action) => {
      const task = action.payload;
      return {
        ...state,
        submitting: false,
        currentTask: task
      }
    },
    getGroupInfo: (state, action) => {
      const groupInfo = action.payload;
      return {
        ...state,
        submitting: false,
        groupInfo
      }
    },
    getTasks: (state, action) => {
      const newSections = action.payload;
      return {
        ...state,
        submitting: false,
        sections: newSections
      }
    },
    updateTaskPosition: (state, action) => {
      const { groupId, sections } = action.payload;
      return {
        ...state,
        submitting: false,
        sections: sections
      }
    },
    updateAssignees: (state, action) => {
      const { taskId, assignees } = action.payload;
      return {
        ...state,
        submitting: false,
        currentTask: {
          ...state.currentTask,
          assignees
        }
      }
    },
    updateContentTask: (state, action) => {
      const { content, taskId } = action.payload;
      return {
        ...state,
        submitting: false,
        currentTask: {
          ...state.currentTask,
          content
        }
      }
    },
    updateTitleTask: (state, action) => {
      const { title, taskId } = action.payload;
      return {
        ...state,
        submitting: false,
        currentTask: {
          ...state.currentTask,
          title
        }
      }
    },
    removeTasks: (state) => {
      return {
        ...state,
        submitting: false,
        sections: []
      }
    }
  }
});

const { reducer, actions } = groupTasks;
export const {
  getTask,
  getTasks,
  getGroupInfo,
  requestTask,
  requestTasks,
  requestGroupInfo,
  updateTaskPosition,
  updateContentTask,
  updateTitleTask,
  updateAssignees,
  removeTasks,
} = actions;

export default reducer;
