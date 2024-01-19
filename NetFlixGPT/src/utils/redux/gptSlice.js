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
    toggleGpt: (state) => {
      // state.toggleSearch = action.payload;
      state.toggleSearch = !state.toggleSearch;
    },
    toggleSeachFalse: (state) => {
      state.toggleSearch = false;
      state.home = true;
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

export const { toggleGpt, addMovieDetails, goBack, toggleSeachFalse } = getSlice.actions;
export default getSlice.reducer;
