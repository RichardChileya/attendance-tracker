import { combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import React from "react";

const rootReducer = combineReducers({
  dashboard: dashboardSlie, 
  attendances: attendanceSlice,
});

const store = () => (
{
  reducer: rootReducer, middleware: [...getDefaultMiddleware(), logger],
},
);
 
export default store;