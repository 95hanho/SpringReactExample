// import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "./userList";

export default configureStore({
  reducer: {
    userList: userListReducer,
  },
});
