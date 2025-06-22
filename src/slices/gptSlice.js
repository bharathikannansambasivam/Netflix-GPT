import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    isGptPage: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toogleGptSearch: (state) => {
      state.isGptPage = !state.isGptPage;
    },
    addMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;

      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toogleGptSearch, addMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
