import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./reducers/sideBarReducer";

const rootReducer = {
  sidebar: sideBarReducer,
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;