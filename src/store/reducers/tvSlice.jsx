import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const tvSlice = createSlice({
  name: "tvSlice",
  initialState,
  reducers: {
    loadtv: (state, action) => {
      state.info = action.payload;
    },

    removetv: (state, _action) => {
      state.info = null;
    },
  },
});

export const { loadtv, removetv } = tvSlice.actions;

export default tvSlice.reducer;
