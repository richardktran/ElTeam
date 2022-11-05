import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'

const initialItems = {
  group_id: 107,
  submitting: false,
  currentTask: {},
  groupInfo: {},
  sections: [
    {
      id: uuidv4(),
      title: ' 📃 To do',
      tasks: []
    },
    {
      id: uuidv4(),
      title: ' ✏️ In progress',
      tasks: []
    },
    {
      id: uuidv4(),
      title: ' ✔️ Completed',
      tasks: []
    }
  ]
};

const groupTasks = createSlice({
  name: 'groupTasks',
  initialState: initialItems,
  reducers: {
    requestTask: (state, action) => {
      const task_id = action.payload;
      return {
        ...state,
        submitting: true,
        currentTask: {
          ...state.currentTask,
          id: task_id
        }
      }
    },
    requestTasks: (state, action) => {
      const group_id = action.payload;
      return {
        ...state,
        submitting: true,
        group_id
      }
    },
    requestGroupInfo: (state, action) => {
      const course_id = action.payload;
      return {
        ...state,
        submitting: true,
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
      console.log(action.payload);
      const { groupId, sections } = action.payload;
      return {
        ...state,
        submitting: false,
        sections: sections
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
  updateTitleTask
} = actions;

export default reducer;
