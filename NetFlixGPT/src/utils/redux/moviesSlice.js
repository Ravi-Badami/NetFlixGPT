import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: null,
  reducers: {
    addMovies: (state, action) => {
      return action.payload;
    },
  },
});

export const { addMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
