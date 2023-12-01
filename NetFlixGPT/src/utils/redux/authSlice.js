import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      /** since we are not using array in initalState we are returning */
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
