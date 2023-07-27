import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userSlice from './reducer/userSlice';
import attendanceSlice from './reducer/attendanceSlice';
import requestSlice from './reducer/requestSlice';

const rootReducer = combineReducers({
  user: userSlice,
  requests: requestSlice,
  attendances: attendanceSlice,
});

const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
  },
);

export default store;
