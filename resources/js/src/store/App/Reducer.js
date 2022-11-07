import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'

const initialItems = {
  isLoading: false
};

const app = createSlice({
  name: 'courses',
  initialState: initialItems,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    changeLoading: (state, action) => {
      const isLoading = action.payload;
      return {
        ...state,
        isLoading
      }
    }
  }
});

const { reducer, actions } = app;
export const {
  showLoading,
  hideLoading,
  changeLoading
} = actions;

export default reducer;
