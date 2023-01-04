import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginReducer",
  initialState: {
    name: "sagar",
    email: "sagarabbasi7786@gmail.com",
    password: "abc",
  },
  reducers: {
    add(state, action) {},
    edit(state, action) {},
    del(state, action) {},
  },
});
export const { add, edit } = loginSlice.actions;
export default loginSlice.reducer;
