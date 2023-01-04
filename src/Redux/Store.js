import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./LoginReducer";

const store = configureStore({
  reducer: {
    loginReducer: loginSlice,
  },
});

export default store;
