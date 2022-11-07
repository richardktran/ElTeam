import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootSagas from './saga/rootSagas';
import sideBarReducer from "./reducers/sideBarReducer";
import appReducer from "../store/App/Reducer";
import groupTasksReducer from "../store/Tasks/Reducer";
import CourseReducer from "../store/Course/Reducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = {
  app: appReducer,
  sidebar: sideBarReducer,
  groupTasks: groupTasksReducer,
  course: CourseReducer
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSagas);

export default store;