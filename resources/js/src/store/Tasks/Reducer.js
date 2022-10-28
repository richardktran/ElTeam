import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'

const initialItems = [
  {
    id: uuidv4(),
    title: ' 📃 To do',
    tasks: [
      {
        id: uuidv4(),
        title: 'Learn JavaScript 1'
      },
      {
        id: uuidv4(),
        title: 'Learn Git'
      },
      {
        id: uuidv4(),
        title: 'Learn Python'
      },
    ]
  },
  {
    id: uuidv4(),
    title: ' ✏️ In progress',
    tasks: [
      {
        id: uuidv4(),
        title: 'Learn CSS'
      },
      {
        id: uuidv4(),
        title: 'Learn Golang'
      }
    ]
  },
  {
    id: uuidv4(),
    title: ' ✔️ Completed',
    tasks: [
      {
        id: uuidv4(),
        title: 'Learn HTML'
      }
    ]
  }
];

const groupTasks = createSlice({
  name: 'groupTasks',
  initialState: initialItems,
  reducers: {
    updateTasks: (state, action) => {
      const newItems = action.payload;
      return newItems;
    },
  }
});

const { reducer, actions } = groupTasks;
export const { updateTasks } = actions;

export default reducer;
