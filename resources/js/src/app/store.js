import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootSagas from './saga/rootSagas';
import sideBarReducer from "./reducers/sideBarReducer";
import groupTasksReducer from "../store/Tasks/Reducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = {
  sidebar: sideBarReducer,
  groupTasks: groupTasksReducer,
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSagas);

export default store;