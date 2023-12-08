import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
const appStore = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
