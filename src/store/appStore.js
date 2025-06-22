import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import moviesReducer from "../slices/movieSlice";
import gptReducer from "../slices/gptSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});
export default appStore;
