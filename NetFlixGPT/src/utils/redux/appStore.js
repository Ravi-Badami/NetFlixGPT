import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
const appStore = configureStore({
  reducer: {
    auth: authReducer,
  },
});
// appStore.subscribe(() => {
//   console.log(appStore.reducer.auth);
// });
export default appStore;
