import { createSlice } from '@reduxjs/toolkit';

const getSlice = createSlice({
  name: 'gpt',
  initialState: {
    toggleSearch: false,
    home: false,
    getMoviesNames: '',
    getMovies: '',
  },
  reducers: {
    toggleGpt: (state, action) => {
      // state.toggleSearch = action.payload;

      state.toggleSearch = !state.toggleSearch;
    },
    addMovieDetails: (state, action) => {
      const { movieNames, moviesResults } = action.payload;
      state.getMoviesNames = movieNames;
      state.getMovies = moviesResults;
    },
    goBack: (state, action) => {
      state.home = action.payload;
    },
  },
});

export const { toggleGpt, addMovieDetails, goBack } = getSlice.actions;
export default getSlice.reducer;
