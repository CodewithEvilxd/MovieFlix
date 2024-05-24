import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
  imageURL: "",
};

export const movieFlixSlice = createSlice({
  name: "movieFlix",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setImageURL: (state, action) => {
      state.imageURL = action.payload;
    },
  },
});

export const { setBannerData, setImageURL } = movieFlixSlice.actions;

export default movieFlixSlice.reducer;
