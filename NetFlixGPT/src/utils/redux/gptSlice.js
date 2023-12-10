import { createSlice } from "@reduxjs/toolkit";

const getSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleSearch: false,
    getMoviesNames: null,
    getMovies: null,
  },
  reducers: {
    toggleGpt: (state) => {
      state.toggleSearch = !state.toggleSearch;
    },
    addMovieDetails: (state, action) => {
      const { movieNames, moviesResults } = action.payload;
      state.getMoviesNames = movieNames;
      state.getMovies = moviesResults;
    },
  },
});

export const { toggleGpt, addMovieDetails } = getSlice.actions;
export default getSlice.reducer;
