import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'

const initialItems = {
  group_id: 107,
  submitting: false,
  currentTask: {},
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
    getTask: (state, action) => {
      const task = action.payload;
      return {
        ...state,
        submitting: false,
        currentTask: task
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
  }
});

const { reducer, actions } = groupTasks;
export const {
  getTask,
  getTasks,
  requestTask,
  requestTasks,
  updateTaskPosition
} = actions;

export default reducer;
