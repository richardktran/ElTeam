import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'

const initialItems = {
  group_id: 107,
  submitting: false,
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
    requestTasks: (state, action) => {
      const group_id = action.payload;
      return {
        ...state,
        submitting: true,
        group_id
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
  }
});

const { reducer, actions } = groupTasks;
export const { getTasks, requestTasks } = actions;

export default reducer;
