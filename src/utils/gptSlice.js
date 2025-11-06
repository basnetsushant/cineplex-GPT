import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "Gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    showShimmer: false,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    setShowShimmer: (state, action) => {
      state.showShimmer = action.payload;
    },
  },
});

export const { toggleGPTSearchView, addGptMovieResult, setShowShimmer } =
  gptSlice.actions;
export default gptSlice.reducer;
