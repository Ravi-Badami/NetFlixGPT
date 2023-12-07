import { createSlice } from "@reduxjs/toolkit";
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    id: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { addMovies, addId } = moviesSlice.actions;
export default moviesSlice.reducer;
