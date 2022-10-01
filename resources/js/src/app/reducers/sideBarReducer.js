import { createSlice } from '@reduxjs/toolkit';
import { homeItems } from '../../pages/HomePage/sidebars/home';

const initialItems = [];

const sidebar = createSlice({
  name: 'sidebar',
  initialState: initialItems,
  reducers: {
    changePage: (state, action) => {
      const newItems = action.payload;
      return newItems;
    },
    changeActiveItem: (state, action) => {
      const newItems = state.map((item) => {
        if (item.path === action.payload) {
          return { ...item, active: true };
        }
        return { ...item, active: false };
      });

      return newItems;
    }
  }
});

const { reducer, actions } = sidebar;
export const { changePage, changeActiveItem } = actions;
export default reducer;