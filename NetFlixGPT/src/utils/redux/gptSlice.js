import { createSlice } from "@reduxjs/toolkit";

const getSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleSearch: false,
  },
  reducers: {
    toggleGpt: (state) => {
      state.toggleSearch = !state.toggleSearch;
    },
  },
});

export const { toggleGpt } = getSlice.actions;
export default getSlice.reducer;
