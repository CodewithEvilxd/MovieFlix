import { configureStore } from "@reduxjs/toolkit";
import movieFlixReducer from "./movieFlixSlice";

export const store = configureStore({
  reducer: {
    movieFlixData: movieFlixReducer,
  },
});
